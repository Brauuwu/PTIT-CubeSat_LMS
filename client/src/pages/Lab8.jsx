import { useState } from 'react';
import { getLabById } from '../data/labs';
import LabLayout from '../components/layout/LabLayout';
import IDEPanel from '../components/editor/IDEPanel';
import DashboardBuilder from '../components/dashboard/DashboardBuilder';

export default function Lab8() {
  const lab = getLabById(8);
  const [code, setCode] = useState('');

  const editorPanel = <IDEPanel labId={lab.id} code={code} setCode={setCode} />;

   const vizPanel = (
    <DashboardBuilder />
  );

  return <LabLayout lab={lab} editorPanel={editorPanel} visualizationPanel={vizPanel} />;
}
