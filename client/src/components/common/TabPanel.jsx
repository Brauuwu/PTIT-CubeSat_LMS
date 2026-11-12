import { useState } from 'react';

export default function TabPanel({ tabs, defaultTab = 0, extraToolbar }) {
  const [active, setActive] = useState(defaultTab);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="tabs" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </div>
        {extraToolbar && (
          <div style={{ display: 'flex', gap: '8px', paddingRight: '16px' }}>
            {extraToolbar}
          </div>
        )}
      </div>
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        {tabs.map((tab, i) => (
          <div
            key={i}
            style={{
              padding: 'var(--space-lg)',
              height: '100%',
              display: active === i ? 'block' : 'none'
            }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
