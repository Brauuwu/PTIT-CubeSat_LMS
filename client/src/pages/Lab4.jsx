import { useState } from 'react';
import { getLabById } from '../data/labs';
import LabLayout from '../components/layout/LabLayout';
import IDEPanel from '../components/editor/IDEPanel';
import SerialMonitor from '../components/serial/SerialMonitor';
import AttitudeViewer3D from '../components/visualization/AttitudeViewer3D';
import GPSMap from '../components/visualization/GPSMap';
import CameraViewer from '../components/visualization/CameraViewer';

export default function Lab4() {
  const lab = getLabById(4);
  const [code, setCode] = useState('');

  const editorPanel = <IDEPanel labId={lab.id} code={code} setCode={setCode} />;

     const vizPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, minHeight: 0 }}>
      <div className="dashboard-grid">
            <AttitudeViewer3D height="100%" />
            <GPSMap height="100%" />
            <CameraViewer />
      </div>
            <SerialMonitor height={350} />
    </div>
  );

  return <LabLayout lab={lab} editorPanel={editorPanel} visualizationPanel={vizPanel} />;
}
