import { getLabById } from '../data/labs';
import LabLayout from '../components/layout/LabLayout';
import ComponentViewer from '../components/interactive/ComponentViewer';

export default function Lab0() {
  const lab = getLabById(0);

  const vizPanel = (
    <div className="card" style={{ minHeight: '600px' }}>
      <div className="card-header">🔍 Khám phá PTIT STEM CubeSat</div>
      <div className="card-body">
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.05rem' }}>
          Nhấp vào từng phân hệ để xem chi tiết thông số kỹ thuật và vai trò trong hệ thống vệ tinh.
        </p>
        <ComponentViewer />
      </div>
    </div>
  );

  return <LabLayout lab={lab} editorPanel={null} visualizationPanel={vizPanel} />;
}
