import { useState } from 'react';
import { getLabById } from '../data/labs';
import LabLayout from '../components/layout/LabLayout';
import IDEPanel from '../components/editor/IDEPanel';
import SerialMonitor from '../components/serial/SerialMonitor';

export default function Lab2() {
  const lab = getLabById(2);
  const [code, setCode] = useState('');

  const editorPanel = <IDEPanel labId={lab.id} code={code} setCode={setCode} />;

     const vizPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, minHeight: 0 }}>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <SerialMonitor height="100%" />
      </div>
    </div>
  );

  return <LabLayout lab={lab} editorPanel={editorPanel} visualizationPanel={vizPanel} />;
}
