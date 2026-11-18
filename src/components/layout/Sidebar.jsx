import { NavLink, useParams } from 'react-router-dom';
import { LABS } from '../../data/lab-metadata';
import logoSvg from '../../assets/logo.svg';

export default function CourseSidebar() {
  const { labId } = useParams(); 
  const activeLab = labId ? parseInt(labId, 10) : 0;

  return (
    <aside className="custom-course-sidebar">
      <div className="sidebar-rail">
        <div className="rail-top-logo">
          <img src={logoSvg} alt="CubeSAT Logo" />
        </div>
        
        <div className="rail-labs-list">
          {LABS.map(lab => {
            const isActive = activeLab === lab.id;
            return (
              <NavLink
                key={lab.id}
                to={`/lab${lab.id}`}
                className={`rail-lab-item ${isActive ? 'active' : ''}`}
                title={`Lab ${lab.id}: ${lab.title}`}
              >
                <span className="lab-badge-text">LAB</span>
                <span className="lab-number">{lab.id}</span>
              </NavLink>
            );
          })}
        </div>

        <div className="rail-bottom-home">
          <NavLink to="/" className="rail-home-btn" title="Trang chủ">
            🏠
          </NavLink>
        </div>
      </div>

      <div className="sidebar-expanded-panel">
        <div className="panel-brand-header">
          <h2>cubeSAT</h2>
          <span>PTIT LMS</span>
        </div>

        <div className="panel-nav-sections">
          <div className="sub-nav-group">
            <NavLink to={`/lab${activeLab}?tab=overview`} className="sub-nav-item active">
              <span className="step-num">01</span>
              <span className="step-label">Tổng quan bài học</span>
            </NavLink>
            <NavLink to={`/lab${activeLab}?tab=docs`} className="sub-nav-item">
              <span className="step-num">02</span>
              <span className="step-label">Tài liệu hướng dẫn</span>
            </NavLink>
            <NavLink to={`/lab${activeLab}?tab=components`} className="sub-nav-item">
              <span className="step-num">03</span>
              <span className="step-label">Thành phần</span>
            </NavLink>
          </div>

          <div className="labs-overview-list">
            {LABS.map(lab => (
              <NavLink 
                key={lab.id} 
                to={`/lab${lab.id}`} 
                className={`lab-row-item ${activeLab === lab.id ? 'active' : ''}`}
              >
                <div className="lab-row-title">LAB {lab.id}: {lab.title.toUpperCase()}</div>
                <div className="lab-row-sub">0 / 3 • 12 phút</div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}