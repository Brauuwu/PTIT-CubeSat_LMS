import { useTelemetry } from '../../contexts/telemetry-api';
import { describeShellResult } from '../../telemetry/shell-results.js';

export default function ShellResultsPanel() {
  const { activity, mode, link, now } = useTelemetry();
  const results = activity.events.filter(event => event.group === 'shell').slice(-20).reverse();
  const fresh = mode === 'serial' && link === 'connected' && results[0] && now - results[0].at <= 5000;
  return <section className="card">
    <div className="card-header"><h3>Kết quả lệnh</h3><span>{fresh ? 'Có phản hồi mới' : 'Chờ lệnh'}</span></div>
    <div className="card-body">
      {results.length ? <ol className="practice-report-list practice-shell-list">{results.map((event, index) => <li key={`${event.at}:${index}`} className={event.phase === 'error' ? 'is-error' : 'is-ok'}>
        <time>{new Date(event.at).toLocaleTimeString()}</time>{' '}
        <code>{event.command}</code>{' '}
        <strong>{event.phase === 'error' ? 'Lỗi' : 'Thành công'}</strong>
        <span>{describeShellResult(event)}</span>
        <small><code>{event.reply}</code></small>
      </li>)}</ol> : <p className="telemetry-empty">Gửi một lệnh (pwd, ls, mkdir, cd, touch, rm…) để xem kết quả tại đây.</p>}
    </div>
  </section>;
}
