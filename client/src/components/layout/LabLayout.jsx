import { useState, useEffect, useRef } from 'react';
import CourseSidebar from './CourseSidebar';
import VideoPlayer from '../common/VideoPlayer';
import DocViewer from '../common/DocViewer';

export default function LabLayout({ lab, editorPanel, visualizationPanel }) {
  const mainRef = useRef(null);
  
  // 0: Tổng quan (Video), 1: Tài liệu, 2: Thực hành
  const [activeLesson, setActiveLesson] = useState(0);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    // Khi đổi lab, reset về bài học đầu tiên (Tổng quan)
    setActiveLesson(0);
    setIsEditorOpen(false);
  }, [lab?.id]);

  if (!lab) return <div>Lab không tồn tại</div>;

  return (
    <div className="player-layout">
      
      {/* Left Sidebar Curriculum */}
      <CourseSidebar 
        currentLabId={lab.id} 
        activeLesson={activeLesson}
        onSelectLesson={setActiveLesson} 
      />

      {/* Main Content Area */}
      <div className="player-main" ref={mainRef}>
        
        {activeLesson === 0 && (
          <div className="animate-fadeInUp" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="video-section">
              <div className="video-wrapper">
                <VideoPlayer url={lab.videoUrl} />
              </div>
            </div>
            
            <div className="player-content" style={{ marginTop: '32px', marginBottom: '64px' }}>
              <div style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  Lab {lab.id}: {lab.title}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '40px' }}>
                  {lab.description}
                </p>
                
                <div className="card">
                  <div className="card-header" style={{ fontSize: '1.125rem' }}>🎯 Mục tiêu bài học</div>
                  <div className="card-body">
                    <ul style={{ paddingLeft: '24px', lineHeight: 2, fontSize: '1.05rem', color: 'var(--text-body)' }}>
                      <li>Nắm vững kiến trúc phần cứng của phân hệ tương ứng trong vệ tinh.</li>
                      <li>Thực hành cấu hình, lập trình kéo thả và phân tích mã nguồn C++ tương ứng.</li>
                      <li>Kiểm thử trực quan và thu thập dữ liệu qua hệ thống trạm mặt đất mô phỏng.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeLesson === 1 && (
          <div className="player-content animate-fadeInUp" style={{ padding: '40px max(32px, calc((100vw - 1280px - var(--sidebar-width)) / 2))' }}>
            <div className="doc-content">
              <DocViewer docPath={lab.docPath} />
            </div>
          </div>
        )}

        {activeLesson === 2 && (
          <div className="player-content animate-fadeInUp" style={{ padding: 0, flex: 1, minHeight: 0, display: 'flex', position: 'relative', overflow: 'hidden' }}>
            
            {/* Visual Panel */}
            <div style={{ flex: 1, padding: '32px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {(lab.id !== 0 || editorPanel) && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: lab.id === 0 ? 0 : '12px' }}>
                  {lab.id !== 0 && (
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-heading)' }}>Khu vực Trực quan / Bảng điều khiển</h3>
                  )}
                  {editorPanel && (
                    <button 
                      className="btn btn-primary"
                      onClick={() => setIsEditorOpen(!isEditorOpen)}
                      style={{ borderRadius: '24px', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)' }}
                    >
                      {isEditorOpen ? 'Đóng Trình soạn thảo ✕' : 'Mở Trình soạn thảo (Code) 💻'}
                    </button>
                  )}
                </div>
              )}
              {visualizationPanel}
            </div>

            {/* Slide-out Editor Panel */}
            {editorPanel && (
              <div className={`slide-out-editor ${isEditorOpen ? 'open' : ''}`}>
                <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {editorPanel}
                </div>
              </div>
            )}
            
          </div>
        )}

      </div>
    </div>
  );
}
