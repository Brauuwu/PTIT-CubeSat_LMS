import { useState } from 'react';
import { getLabById } from '../data/labs';
import LabLayout from '../components/layout/LabLayout';
import IDEPanel from '../components/editor/IDEPanel';
import SerialMonitor from '../components/serial/SerialMonitor';
import AttitudeViewer3D from '../components/visualization/AttitudeViewer3D';
import GPSMap from '../components/visualization/GPSMap';
import VoltageChart from '../components/visualization/VoltageChart';

export default function Lab7() {
  const lab = getLabById(7);
  const [code, setCode] = useState('');

  const editorPanel = <IDEPanel labId={lab.id} code={code} setCode={setCode} />;

     const vizPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, minHeight: 0 }}>
      <div className="dashboard-grid">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', height: '100%' }}>
            <AttitudeViewer3D height="100%" />
            <GPSMap height="100%" />
            <VoltageChart maxPoints={100} />
          </div>
      </div>
    </div>
  );

  return <LabLayout lab={lab} editorPanel={editorPanel} visualizationPanel={vizPanel} />;
}
