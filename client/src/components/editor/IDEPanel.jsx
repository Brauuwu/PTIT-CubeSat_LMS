import { useState } from 'react';
import TabPanel from '../common/TabPanel';
import BlocklyEditor from './BlocklyEditor';
import MonacoEditor from './MonacoEditor';
import CloudCompiler from '../serial/CloudCompiler';
import WebFlasher from '../serial/WebFlasher';

export default function IDEPanel({ labId, code, setCode }) {
  const editorTabs = [
    {
      label: '🧩 Kéo thả (Blockly)',
      content: <BlocklyEditor labId={labId} onCodeChange={setCode} />
    },
    {
      label: '💻 Mã nguồn (C++)',
      content: <MonacoEditor code={code} readOnly={true} />
    }
  ];

  const toolbar = (
    <div style={{ display: 'flex', gap: '12px' }}>
      <CloudCompiler code={code} inline={true} />
      <WebFlasher inline={true} />
    </div>
  );

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '16px', overflow: 'hidden' }}>
      <TabPanel tabs={editorTabs} defaultTab={0} extraToolbar={toolbar} />
    </div>
  );
}
