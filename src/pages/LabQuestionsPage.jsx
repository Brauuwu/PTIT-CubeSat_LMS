import { Link } from 'react-router-dom';
import { getLabById } from '../data/lab-metadata';
import { getLabQuestionSet } from '../data/lab-questions';
import NotFoundPage from './NotFoundPage';
import { CheckpointCard } from '../components/lessons/LabCheckpoint';

// src/data/curriculum.js is a server seed input and must stay out of the UI bundle.
const lessonUrl = (slug, lessonId) => `/${slug}?lesson=${encodeURIComponent(lessonId)}`;

export default function LabQuestionsPage({ labId }) {
  const lab = getLabById(labId);
  const set = getLabQuestionSet(labId);
  if (!lab || !set) return <NotFoundPage />;
  const total = set.checkpoints.reduce((count, item) => count + item.questions.length, 0);
  return <div className="lab-questions-page">
    <nav className="lab-questions-back"><Link to={`/${lab.slug}`}>← Quay lại Lab {lab.id}</Link></nav>
    <header className="lab-state-title lab-state-title--compact">
      <div className="lab-state-meta"><span className="lab-state-number">Lab {lab.id} · Câu hỏi kiểm tra</span><span className="lab-state-section">{lab.title}</span></div>
      <h1 className="lab-state-copy">Câu hỏi kiểm tra cuối Lab {lab.id}</h1>
      <p className="lab-state-description">
        Củng cố kiến thức sau mỗi phần Doc và mỗi nhóm bài thực hành theo giáo trình PTITCube: {set.checkpoints.length} mục kiểm tra
        {total ? ` · ${total} câu hỏi` : ''}.
      </p>
    </header>
    {!total && <p className="lab-questions-notice" role="status">Bộ câu hỏi của Lab {lab.id} đang được soạn. Trang hiện liệt kê các mục kiểm tra và nội dung sẽ được hỏi.</p>}
    <ol className="lab-questions-list">
      {set.checkpoints.map((checkpoint, index) => <CheckpointCard key={checkpoint.id} checkpoint={checkpoint} index={index}
        renderExercise={id => <Link to={lessonUrl(lab.slug, id)}><code>{id}</code></Link>} />)}
    </ol>
    <section className="lesson-reading-card lab-questions-summary">
      <h2>📝 Tổng hợp Lab {lab.id}</h2>
      <p>{set.summary}</p>
    </section>
  </div>;
}
