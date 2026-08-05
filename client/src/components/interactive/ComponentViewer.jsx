import { useState } from 'react';
import { CUBESAT_COMPONENTS } from '../../data/components-data';

export default function ComponentViewer() {
  const [selected, setSelected] = useState(CUBESAT_COMPONENTS[0]);

  return (
    <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', minHeight: '600px' }}>
      
      {/* Sidebar - Table of Contents */}
      <div style={{ 
        flex: '0 0 280px', 
        display: 'flex', flexDirection: 'column', gap: '4px',
        borderRight: '1px solid var(--border-subtle)', paddingRight: '24px',
        position: 'sticky', top: '0',
        maxHeight: 'calc(100vh - 120px)',
        overflowY: 'auto',
        paddingBottom: '24px'
      }}>
        <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', paddingLeft: '12px' }}>
          Danh mục Phân hệ
        </h3>
        {CUBESAT_COMPONENTS.map(comp => (
          <div
            key={comp.id}
            onClick={() => setSelected(comp)}
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '12px',
              background: selected?.id === comp.id ? 'var(--brand-primary-light)' : 'transparent',
              color: selected?.id === comp.id ? 'var(--brand-primary)' : 'var(--text-body)',
              fontWeight: selected?.id === comp.id ? 600 : 500,
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              if (selected?.id !== comp.id) e.currentTarget.style.background = 'var(--bg-surface-hover)';
            }}
            onMouseLeave={(e) => {
              if (selected?.id !== comp.id) e.currentTarget.style.background = 'transparent';
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{comp.icon}</span>
            <span>{comp.name.split('—')[0].trim()}</span>
          </div>
        ))}
      </div>

      {/* Main Content Area (Book Page) */}
      {selected && (
        <div className="animate-fadeInUp" style={{ flex: 1, paddingBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '20px', 
              background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {selected.icon}
            </div>
            <div>
              <h2 style={{ fontSize: '2.25rem', color: 'var(--text-heading)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                {selected.name}
              </h2>
              <div style={{ fontSize: '1.15rem', color: 'var(--brand-primary)', fontWeight: 600 }}>
                {selected.role}
              </div>
            </div>
          </div>

          <div style={{ 
            width: '100%', height: '400px', borderRadius: '16px', marginBottom: '40px',
            background: `url(${selected.image}) center/cover no-repeat`,
            boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-subtle)'
          }}></div>

          <div style={{ 
            fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-body)', 
            marginBottom: '48px', maxWidth: '800px'
          }}>
            {selected.description}
          </div>

          <h3 style={{ 
            fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '24px', 
            borderBottom: '2px solid var(--border-subtle)', paddingBottom: '12px',
            maxWidth: '800px'
          }}>
            Thông số Kỹ thuật
          </h3>
          
          <table style={{ width: '100%', maxWidth: '800px', borderCollapse: 'collapse' }}>
            <tbody>
              {selected.specs.map((spec, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '20px 0', width: '35%', fontWeight: 600, color: 'var(--text-heading)' }}>
                    {spec.label}
                  </td>
                  <td style={{ padding: '20px 0', color: 'var(--text-muted)' }}>
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}
