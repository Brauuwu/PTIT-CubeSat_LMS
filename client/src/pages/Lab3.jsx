import { useState } from 'react';
import { getLabById } from '../data/labs';
import LabLayout from '../components/layout/LabLayout';
import IDEPanel from '../components/editor/IDEPanel';
import SerialMonitor from '../components/serial/SerialMonitor';
import VoltageChart from '../components/visualization/VoltageChart';

export default function Lab3() {
  const lab = getLabById(3);
  const [code, setCode] = useState('');

  const editorPanel = <IDEPanel labId={lab.id} code={code} setCode={setCode} />;

     const vizPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, minHeight: 0 }}>
      <div className="dashboard-grid">
            <VoltageChart />
      </div>
            <SerialMonitor height={350} />
    </div>
  );

  return <LabLayout lab={lab} editorPanel={editorPanel} visualizationPanel={vizPanel} />;
}
