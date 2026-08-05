import { Link } from 'react-router-dom';
import { LABS } from '../data/labs';

export default function HomePage() {
  return (
    <div className="animate-fadeInUp">
      
      {/* Premium Hero Section */}
      <div className="home-hero-wrapper">
        <div className="home-hero">
          <h1>Làm chủ Công nghệ Vệ tinh CubeSat</h1>
          <p>
            Khóa học thực hành chuyên sâu từ cơ bản đến nâng cao. Xây dựng, lập trình, mô phỏng và điều khiển vệ tinh siêu nhỏ 1U của riêng bạn ngay trên trình duyệt.
          </p>
          
          <div className="home-stats-glass">
            <div className="stat-glass-card">
              <span className="stat-value">9</span>
              <span className="stat-label">Bài thực hành</span>
            </div>
            <div className="stat-glass-card">
              <span className="stat-value">6+</span>
              <span className="stat-label">Phân hệ phần cứng</span>
            </div>
            <div className="stat-glass-card">
              <span className="stat-value">3D</span>
              <span className="stat-label">Mô phỏng Realtime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Curriculum Section */}
      <div className="course-section">
        <h2 className="section-title">Lộ trình khóa học</h2>
        <div className="lab-grid-premium">
          {LABS.map((lab, index) => (
            <Link key={lab.id} to={`/${lab.slug}`} className="lab-card-premium" style={{ animationDelay: `${index * 0.1}s` }} className="lab-card-premium animate-fadeInUp">
              <div className="lab-icon-wrapper" style={{ background: lab.bgColor, color: 'white' }}>
                {lab.icon}
              </div>
              <h3>Lab {lab.id}: {lab.title.split('(')[0].trim()}</h3>
              <p>{lab.description}</p>
              
              <div className="lab-meta">
                <span className="lab-meta-tags">{lab.features.length} tính năng</span>
                <span className="btn btn-outline btn-sm">Bắt đầu học →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
