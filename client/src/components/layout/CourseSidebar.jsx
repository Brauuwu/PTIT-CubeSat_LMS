import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LABS } from '../../data/labs';

export default function CourseSidebar({ currentLabId, activeLesson, onSelectLesson }) {
  const navigate = useNavigate();
  // State to track which lab accordion is expanded
  const [expandedLab, setExpandedLab] = useState(currentLabId);

  useEffect(() => {
    setExpandedLab(currentLabId);
  }, [currentLabId]);

  const toggleLab = (id, slug) => {
    if (id === currentLabId) {
      // Just toggle expand/collapse if clicking the current lab
      setExpandedLab(expandedLab === id ? null : id);
    } else {
      // Navigate to the lab if clicking a different one
      navigate(`/${slug}`);
    }
  };

  const getLessonsForLab = (labId) => [
    { id: 0, type: 'video', title: '1. Tổng quan bài học', icon: '📺' },
    { id: 1, type: 'reading', title: '2. Tài liệu hướng dẫn', icon: '📖' },
    { 
      id: 2, 
      type: 'practice', 
      title: labId === 0 ? '3. Thành phần' : '3. Thực hành', 
      icon: labId === 0 ? '🔍' : '💻' 
    }
  ];

  return (
    <aside className="player-sidebar">
      <div className="sidebar-title">
        Nội dung khóa học
      </div>
      <div className="curriculum-list">
        {LABS.map(lab => {
          const isCurrentLab = lab.id === currentLabId;
          const isExpanded = expandedLab === lab.id;
          const isCompleted = lab.id < currentLabId;
          
          return (
            <div key={lab.id} className="accordion-section">
              <div 
                className={`accordion-header ${isCurrentLab ? 'current' : ''}`} 
                onClick={() => toggleLab(lab.id, lab.slug)}
              >
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>

                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-heading)', marginTop: '2px' }}>
                    Lab {lab.id}: {lab.title.split('(')[0].trim()}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'flex', gap: '8px' }}>
                    <span>0 / 3</span>
                    <span>•</span>
                    <span>{Math.floor(Math.random() * 20 + 10)} phút</span>
                  </div>
                </div>
                <div className={`accordion-chevron ${isExpanded ? 'expanded' : ''}`}>
                  ▼
                </div>
              </div>

              {isExpanded && (
                <div className="accordion-content">
                  {getLessonsForLab(lab.id).map(lesson => {
                    const isLessonActive = isCurrentLab && activeLesson === lesson.id;
                    return (
                      <div 
                        key={lesson.id} 
                        className={`sub-lesson-item ${isLessonActive ? 'active' : ''}`}
                        onClick={() => {
                          if (!isCurrentLab) {
                            navigate(`/${lab.slug}`);
                            setTimeout(() => onSelectLesson(lesson.id), 100);
                          } else {
                            onSelectLesson(lesson.id);
                          }
                        }}
                      >
                        <span style={{ fontSize: '14px', marginRight: '8px' }}>{lesson.icon}</span>
                        <span style={{ flex: 1 }}>{lesson.title}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
