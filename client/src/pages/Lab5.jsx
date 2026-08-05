import { useState } from 'react';
import { getLabById } from '../data/labs';
import LabLayout from '../components/layout/LabLayout';
import IDEPanel from '../components/editor/IDEPanel';
import TelemetryPanel from '../components/groundstation/TelemetryPanel';
import CommandPanel from '../components/groundstation/CommandPanel';

export default function Lab5() {
  const lab = getLabById(5);
  const [code, setCode] = useState('');

  const editorPanel = <IDEPanel labId={lab.id} code={code} setCode={setCode} />;

     const vizPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, minHeight: 0 }}>
      <div className="dashboard-grid">
            <TelemetryPanel />
            <CommandPanel />
      </div>
    </div>
  );

  return <LabLayout lab={lab} editorPanel={editorPanel} visualizationPanel={vizPanel} />;
}
