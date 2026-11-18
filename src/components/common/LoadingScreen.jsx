import logo from '../../assets/logo.svg';
import ring from '../../assets/loading-ring.svg';

// Theo thiết kế Figma "Loading": logo ở giữa, vòng quỹ đạo hở bên phải có vệ tinh nằm trong khe hở.
export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-orbit">
        <img src={ring} alt="" className="loading-ring" />
        <img src={logo} alt="" className="loading-logo" />
      </div>
      <span className="sr-only" role="status">Đang tải</span>
    </div>
  );
}
