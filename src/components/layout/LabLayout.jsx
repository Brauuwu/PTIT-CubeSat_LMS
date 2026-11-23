import { cloneElement, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CourseSidebar from './CourseSidebar';
import LabFigView from './LabFigView';
import VideoPlayer from '../common/VideoPlayer';
import DocViewer from '../common/DocViewer';
import { authorizedFetch, useAuth } from '../../contexts/auth-api';
import { getAuthToken } from '../../contexts/auth-storage';
import { downloadFile } from '../editor/project-files';
import TelemetryControls from '../groundstation/TelemetryControls';
import PracticeVisualization from '../visualization/PracticeVisualization';
import { useLmsResource } from '../classes/use-lms-resource';
import { getLabQuestionSet } from '../../data/lab-questions';
import { CheckpointCard } from '../lessons/LabCheckpoint';
import { isSequentialLesson } from '../lessons/lesson-sequence';

const LAB0_CHECKPOINTS = { 'quiz-0-1': 'doc-0-1', 'quiz-0-2': 'doc-0-2', 'quiz-0-3': 'practice-0' };
const LAB1_CHECKPOINTS = {
  'quiz-1-1': 'doc-1-1', 'quiz-1-2': 'doc-1-2', 'quiz-1-3': 'doc-1-3', 'quiz-1-4': 'practice-1-led',
  'quiz-1-5': 'doc-1-4', 'quiz-1-6': 'practice-1-button', 'quiz-1-7': 'doc-1-5', 'quiz-1-8': 'practice-1-74hc595',
  'quiz-1-9': 'doc-1-6', 'quiz-1-10': 'practice-1-uart', 'quiz-1-11': 'doc-1-7', 'quiz-1-12': 'doc-1-8',
  'quiz-1-13': 'practice-1-wifi'
};

// Replace (or add) one lab's entry in the /api/progress list with the server's response.
const withLabProgress = (list, body) => (list.some(item => item.lab_id === body.lab_id)
  ? list.map(item => item.lab_id === body.lab_id ? body : item)
  : [...list, body]);

export default function LabLayout(props) {
  const { data, error, loading } = useLmsResource('/api/curriculum/legacy');
  if (loading) return <p role="status">Đang tải giáo trình…</p>;
  if (error) return <p role="alert">{error}</p>;
  const lab = data.find(item => item.id === props.lab.id);
  return <LoadedLabLayout {...props} lab={lab} catalog={data} />;
}

function LoadedLabLayout({ lab, catalog, editorPanel, visualizationPanel = null, practiceActions = null, practiceVariant = 'split' }) {
  const mainRef = useRef(null);
  const [downloadError, setDownloadError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAuthenticated, user, markVideoWatched, markDocViewed } = useAuth();
  const [progress, setProgress] = useState([]);
  const [completeError, setCompleteError] = useState('');
  const [clock, setClock] = useState(Date.now());
  const lessons = lab.lessons;
  const lesson = lessons.find(item => item.id === searchParams.get('lesson')) || lessons[0];
  const lessonIndex = lessons.indexOf(lesson);
  const firstPractice = lessons.find(item => item.type === 'practice');
  const videoUrl = lab?.id === 0 && lesson.id === 'overview' ? lab.videoUrl : lesson.videoUrl;
  const selectLesson = useCallback(id => setSearchParams(current => { const next = new URLSearchParams(current); next.set('lesson', id); return next; }), [setSearchParams]);
  const labProgress = progress.find(item => item.lab_id === lab.id);
  const lessonStates = useMemo(() => labProgress?.lessons || {}, [labProgress]);
  const sequentialLessons = lessons.filter(isSequentialLesson);
  const completedCount = sequentialLessons.filter(item => lessonStates[item.id]?.completed).length;
  const completionPercent = sequentialLessons.length ? Math.round((completedCount / sequentialLessons.length) * 100) : 0;
  const firstIncomplete = lessons.findIndex(item => isSequentialLesson(item) && !lessonStates[item.id]?.completed);
  const checkpointId = lesson.checkpointId || (lab.id === 0 ? LAB0_CHECKPOINTS[lesson.id] : lab.id === 1 ? LAB1_CHECKPOINTS[lesson.id] : null);
  const checkpoint = lesson.type === 'quiz' ? getLabQuestionSet(lab.id)?.checkpoints.find(item => item.id === checkpointId) : null;
  const labTestLesson = lessons.find(item => item.type === 'labtest');
  const elapsedSeconds = lessonStates[lesson.id]?.started_at
    ? Math.max(0, Math.floor((clock - Date.parse(lessonStates[lesson.id].started_at)) / 1000))
    : 0;
  const isSummaryLesson = lesson.type === 'summary' || String(lesson.id || '').startsWith('summary-');
  const remainingSeconds = isSummaryLesson ? 0 : Math.max(0, 60 - elapsedSeconds);
  const isPrivileged = user?.role === 'teacher' || user?.role === 'admin';
  const canComplete = isPrivileged
    || isSummaryLesson
    || Boolean(lessonStates[lesson.id]?.started_at && elapsedSeconds >= 60);
  const sendLessonAction = async (action, fallback) => {
    setCompleteError('');
    const response = await authorizedFetch(`/api/progress/${lab.id}/lessons/${encodeURIComponent(lesson.id)}/${action}`, { method: 'POST' });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) { setCompleteError(body.message || fallback); return; }
    setProgress(current => withLabProgress(current, body));
  };
  const completeLesson = () => sendLessonAction('complete', 'Chưa đủ thời gian học tối thiểu 1 phút.');
  const resetLesson = () => sendLessonAction('reset', 'Không đặt lại được trạng thái bài học.');
  const downloadExample = async () => {
    const token = getAuthToken();
    setDownloading(true); setDownloadError('');
    try {
      const response = await authorizedFetch(`/api/curriculum/exercises/${encodeURIComponent(lesson.id)}/source`);
      if (!response.ok) throw new Error(response.status === 401 ? 'Vui lòng đăng nhập lại.' : 'Không tải được mã mẫu. Vui lòng thử lại.');
      const code = await response.text();
      if (token && token === getAuthToken()) downloadFile(`${lesson.id}.ino`, code, 'text/plain');
    } catch (error) { setDownloadError(error.message); }
    finally { setDownloading(false); }
  };

  useEffect(() => { if (mainRef.current) mainRef.current.scrollTop = 0; }, [lab?.id, lesson.id]);
  useEffect(() => {
    if (!isAuthenticated || !lab) return;
    // The server currently stores lab-level flags, not lesson completion.
    if (lesson.type === 'video' && videoUrl) markVideoWatched(lab.id).catch(() => {});
    if (lesson.type === 'document') markDocViewed(lab.id).catch(() => {});
  }, [isAuthenticated, lab, lesson.type, videoUrl, markVideoWatched, markDocViewed]);
  useEffect(() => {
    if (!isAuthenticated) return undefined;
    let active = true;
    authorizedFetch('/api/progress').then(response => response.json()).then(data => { if (active) setProgress(data); });
    const timer = setInterval(() => setClock(Date.now()), 1000);
    return () => { active = false; clearInterval(timer); };
  }, [isAuthenticated]);
  useEffect(() => {
    if (!isAuthenticated || !lab || lessonStates[lesson.id]?.started_at) return;
    authorizedFetch(`/api/progress/${lab.id}/lessons/${encodeURIComponent(lesson.id)}/start`, { method: 'POST' })
      .then(response => response.json()).then(body => setProgress(current => withLabProgress(current, body)));
  }, [isAuthenticated, lab, lesson.id, lessonStates]);
  useEffect(() => {
    if (!isPrivileged && firstIncomplete >= 0 && lessonIndex > firstIncomplete) selectLesson(lessons[firstIncomplete].id);
  }, [isPrivileged, firstIncomplete, lessonIndex, lessons, selectLesson]);

  if (!lab) return <div>Lab không tồn tại</div>;
  const scopedEditor = isValidElement(editorPanel) ? cloneElement(editorPanel, {
    key: lesson.id, exerciseId: lesson.type === 'practice' ? lesson.id : '', legacyFallback: lesson.id === firstPractice?.id,
  }) : editorPanel;

  // Practice: the requirement and its links sit in "Mục tiêu bài học" at the top; the device bar only appears here.
  const practiceGoal = lesson.type === 'practice' ? <div className="fig-goal-practice">
    <div><h2>Yêu cầu thực hành</h2><p>{lesson.title}.</p><p className="fig-goal-lab">{lab.description}</p></div>
    <div className="lesson-example-links"><a href={lesson.repositoryUrl} target="_blank" rel="noreferrer">Hướng dẫn trên PTITCube ↗</a><button type="button" className="btn btn-sm btn-outline" disabled={downloading} onClick={downloadExample}>{downloading ? 'Đang tải mã mẫu…' : 'Tải mã mẫu ESP32 (.ino)'}</button>{downloadError && <small role="alert">{downloadError}</small>}</div>
  </div> : null;
  const lessonBody = lesson.type === 'practice' ? <>
    <TelemetryControls />
    <section className={`lab-workspace lab-practice-workspace lab-practice-workspace--${practiceVariant}`} aria-label={`Không gian thực hành ${lesson.exerciseCode}`}>
      <div className={`lab-practice-panels lab-practice-panels--${practiceVariant}`}>
        <div className="lab-practice-editor">
          <div className="lab-practice-editor-frame">{scopedEditor}</div>
          {practiceVariant !== 'split' && <div className="lab-practice-actions lab-practice-actions--inline" aria-label="Thao tác thực hành" key={lesson.id}>{practiceActions}</div>}
        </div>
        <div className="lab-practice-visualization"><PracticeVisualization /></div>
      </div>
      {practiceVariant === 'split' && <div className="lab-practice-actions" aria-label="Thao tác thực hành" key={lesson.id}>{practiceActions}</div>}
    </section>
  </> : lesson.type === 'quiz' ? <div className="lesson-quiz">
    {checkpoint ? <CheckpointCard as="div" checkpoint={checkpoint}
      renderExercise={id => <button type="button" className="lesson-quiz-exercise" onClick={() => selectLesson(id)}><code>{id}</code></button>} />
      : <div className="fig-body-text">
        <h2>{lesson.title}</h2>
        <p>Câu hỏi kiểm tra của mục này đang được biên soạn.</p>
      </div>}
    <p className="lesson-quiz-note">Phần câu hỏi dùng để ôn tập, không tính vào tiến độ và không khóa bài tiếp theo.</p>
  </div> : lesson.type === 'summary' ? <div className="fig-body-text">
    <h2>Kết quả cần đạt</h2><p>{lesson.description}</p>
    <h2>Đối chiếu các bài thực hành</h2><p>Kiểm tra mã biên dịch, lưu lại kết quả quan sát và giải thích cách chương trình đáp ứng yêu cầu của từng bài.</p>
    <ul className="lesson-summary-list">{lessons.filter(item => item.type === 'practice').map(item => <li key={item.id}><button type="button" onClick={() => selectLesson(item.id)}><code>{item.exerciseCode}</code><span>{item.title}</span></button></li>)}</ul>
    <p>Lưu mã .ino, file Blockly và kết quả kiểm thử để đưa vào báo cáo Lab {lab.id}.</p>
    <h2>Câu hỏi kiểm tra</h2>
    <p>Ôn lại kiến thức sau mỗi phần Doc và mỗi nhóm bài thực hành của Lab {lab.id}, sau đó làm Lab Test cuối Lab.</p>
    <div className="lesson-example-links">
      {labTestLesson && <button type="button" className="btn btn-sm btn-primary" onClick={() => selectLesson(labTestLesson.id)}>Làm Lab Test cuối Lab {lab.id} →</button>}
      <Link className="btn btn-sm btn-outline lesson-questions-link" to={`/lab${lab.id}/questions`}>Xem tất cả câu hỏi của Lab {lab.id}</Link>
    </div>
  </div> : lesson.type === 'labtest' ? <div className="fig-body-text lesson-labtest">
    <h2>Lab Test cuối Lab {lab.id}</h2>
    <p>Mỗi lượt làm bài gồm các câu hỏi do giảng viên soạn và duyệt trong ngân hàng của Lab {lab.id}. Bài làm được chấm ở máy chủ; đáp án không hiển thị trong lúc làm bài.</p>
    <p className="lab-questions-notice" role="status">Ngân hàng câu hỏi của Lab {lab.id} đang được soạn. Lab Test sẽ mở khi giảng viên xuất bản.</p>
  </div> : lesson.type === 'assembly' ? <div className="fig-body-text">
    <h2>Yêu cầu thực hành</h2>
    <p>{lesson.title}.</p>
    <ul>
      <li>Xem Video 6.2 và chuẩn bị đủ khung, bu lông, bo mạch theo danh mục của bộ kit; lắp khi đã ngắt nguồn.</li>
      <li>Siết bu lông theo đường chéo, không siết chặt hết một cạnh trước.</li>
      <li>Kiểm tra kích thước hoàn thiện theo chuẩn 1U (100 × 100 × 113.5 mm) và độ chắc chắn của ngăn xếp bo.</li>
      <li>Chụp ảnh sản phẩm hoàn thiện từ nhiều góc làm minh chứng nộp cho giảng viên.</li>
    </ul>
  </div> : null;

  return <div className="player-layout">
    <CourseSidebar labs={catalog} currentLabId={lab.id} activeLesson={lesson.id} onSelectLesson={selectLesson} progress={progress} userRole={user?.role} />
    <div className="player-main" ref={mainRef}>
      {lab.id === 0 ? <nav className="lab-mobile-lessons" aria-label="Nội dung Lab 0">
        {lessons.map(item => <button key={item.id} type="button" className={lesson.id === item.id ? 'active' : ''} aria-current={lesson.id === item.id ? 'page' : undefined} onClick={() => selectLesson(item.id)}>{item.title}</button>)}
      </nav> : <div className="lab-mobile-lessons lab-mobile-lessons--curriculum">
        <label htmlFor={`lab-${lab.id}-lesson`}>Nội dung Lab {lab.id} · {lessons.length} phần</label>
        <select id={`lab-${lab.id}-lesson`} value={lesson.id} onChange={event => selectLesson(event.target.value)}>
          {lessons.map((item, index) => <option key={item.id} value={item.id}>{index + 1}. {item.label} · {item.exerciseCode || item.title}</option>)}
        </select>
      </div>}

      <LabFigView
        lab={lab} lesson={lesson} lessons={lessons} lessonIndex={lessonIndex}
        completedCount={completedCount} totalCount={sequentialLessons.length} completionPercent={completionPercent}
        progressNote={lessons.some(item => item.type === 'quiz') ? 'không tính phần câu hỏi' : ''}
        videoNode={<VideoPlayer url={videoUrl} />}
        docNode={<DocViewer key={lesson.id} docPath={lesson.id} content={lesson.reading} />}
        componentsNode={visualizationPanel}
        bodyNode={lessonBody} goalNode={practiceGoal}
        selectLesson={selectLesson}
        showComplete={isSequentialLesson(lesson)}
        canComplete={canComplete} completed={Boolean(lessonStates[lesson.id]?.completed)}
        completeLesson={completeLesson} resetLesson={resetLesson} completeError={completeError}
        remainingSeconds={remainingSeconds}
      />
    </div>
  </div>;
}
