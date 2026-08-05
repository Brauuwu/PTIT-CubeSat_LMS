import { Link, useLocation } from 'react-router-dom';
import { useSerial } from '../../contexts/SerialContext';
import { getLabBySlug } from '../../data/labs';

export default function Header() {
  const location = useLocation();
  const { isConnected, connect, disconnect } = useSerial();

  const slug = location.pathname.replace('/', '');
  const lab = getLabBySlug(slug);

  return (
    <header className="header">
      <div className="header-brand">
        <Link to="/" className="header-logo">🛰️</Link>
        <Link to="/" style={{ color: 'var(--text-heading)', textDecoration: 'none' }}>
          <h1>PTIT CubeSat LMS</h1>
        </Link>
        
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">Trang chủ</Link>
          <Link to="/lab0" className="header-nav-link">Lộ trình học</Link>
          <a href="#" className="header-nav-link">Tài liệu API</a>
        </nav>
      </div>

      <div className="header-actions">
        {lab && (
          <div style={{ marginRight: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>
            Đang học: Lab {lab.id}
          </div>
        )}
        
        <button
          className="btn btn-outline btn-sm"
          onClick={() => isConnected ? disconnect() : connect()}
          style={{
            borderColor: isConnected ? 'var(--accent-green)' : 'var(--border-strong)',
            color: isConnected ? 'var(--accent-green)' : 'var(--text-heading)',
            background: isConnected ? 'var(--bg-surface)' : 'transparent',
            boxShadow: isConnected ? '0 0 10px rgba(16, 185, 129, 0.2)' : 'none',
          }}
        >
          <span style={{ 
            display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', 
            background: isConnected ? 'currentColor' : '#cbd5e1', marginRight: '6px',
            animation: isConnected ? 'pulse-green 2s infinite' : 'none'
          }}></span>
          {isConnected ? 'Serial: Đã kết nối' : 'Kết nối mạch (Web Serial)'}
        </button>

        <div style={{
          width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-surface-hover)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
          border: '1px solid var(--border-subtle)', cursor: 'pointer',
          boxShadow: 'var(--shadow-sm)'
        }}>
          👤
        </div>
      </div>
    </header>
  );
}
