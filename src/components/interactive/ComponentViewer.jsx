import { useState } from 'react';
import { CUBESAT_COMPONENTS } from '../../data/components-data';
import obcIcon from '../../assets/lab-ui/comp-obc.svg';
import epsIcon from '../../assets/lab-ui/comp-eps.svg';
import sensorIcon from '../../assets/lab-ui/comp-sensor.svg';
import gpsIcon from '../../assets/lab-ui/comp-gps.svg';
import comIcon from '../../assets/lab-ui/comp-com.svg';
import storageIcon from '../../assets/lab-ui/comp-storage.svg';
import cdhIcon from '../../assets/lab-ui/comp-cdh.svg';
import cameraIcon from '../../assets/lab-ui/Camera CubeSAT.svg';

// Icon của từng phân hệ; phân hệ chưa có icon thì dùng emoji trong dữ liệu.
const ICONS = { obc: obcIcon, eps: epsIcon, sensor: sensorIcon, gps: gpsIcon, com: comIcon, storage: storageIcon, cdh: cdhIcon, camera: cameraIcon };
// Icon xuất từ Figma bị lật dọc: các phân hệ này cần lật lại cho đúng chiều.
const FLIPPED = new Set(['sensor', 'com', 'storage']);

export default function ComponentViewer() {
  const [selected, setSelected] = useState(CUBESAT_COMPONENTS[0]);

  return (
    <div className="component-explorer">
      <div className="component-explorer-list" aria-label="Danh mục phân hệ CubeSat">
        {CUBESAT_COMPONENTS.map(comp => (
          <button
            type="button"
            key={comp.id}
            onClick={() => setSelected(comp)}
            className={`fig-comp-item ${selected?.id === comp.id ? 'selected' : ''}`}
            aria-pressed={selected?.id === comp.id}
          >
            <span className="fig-comp-icon" aria-hidden="true">
              {ICONS[comp.id] ? <img src={ICONS[comp.id]} alt="" draggable="false" className={[FLIPPED.has(comp.id) && 'is-flipped', comp.id === 'camera' && 'is-camera'].filter(Boolean).join(' ') || undefined} /> : <span className="fig-comp-emoji">{comp.icon}</span>}
            </span>
            <span className="fig-comp-label">
              <strong>{comp.name.split('—')[0].trim()}</strong>
              <small style={/** @type {import('react').CSSProperties} */ ({ '--chars': comp.role.length })}>{comp.role}</small>
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <article className="component-detail animate-fadeInUp">
          <header className="component-detail-header">
            <span className="component-detail-icon" aria-hidden="true">{selected.icon}</span>
            <div><h2>{selected.name}</h2><p>{selected.role}</p></div>
          </header>
          <p className="component-detail-description">{selected.description}</p>
          <h3>Thông số kỹ thuật</h3>
          <div className="component-spec-scroll">
            <table>
            <tbody>
              {selected.specs.map((spec, i) => (
                <tr key={i}>
                  <th scope="row">{spec.label}</th>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </article>
      )}
    </div>
  );
}
