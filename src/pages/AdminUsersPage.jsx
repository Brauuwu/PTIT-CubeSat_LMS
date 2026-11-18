import { useState } from 'react';
import { request } from '../contexts/auth-api';
import { Notice, Pagination } from '../components/classes/LmsCommon';
import { useLmsResource } from '../components/classes/use-lms-resource';

const roleLabels = { admin: 'Quản trị viên', teacher: 'Giảng viên', user: 'Người dùng' };

export default function AdminUsersPage() {
  const [filters, setFilters] = useState({ search: '', role: '', status: '', pending_reset: '' });
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pending, setPending] = useState(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState({});
  const [issued, setIssued] = useState(null);
  const query = new URLSearchParams({ page: String(page), ...Object.fromEntries(Object.entries(filters).filter(([, value]) => value)) });
  const { data, loading, error, reload } = useLmsResource(`/api/admin/users?${query}`);
  const filter = (key, value) => { setFilters(current => ({ ...current, [key]: value })); setPage(1); setPending(null); };
  async function save() {
    setBusy(true); setNotice({}); setIssued(null);
    try {
      if (pending.resetLink) {
        const res = await request(`/api/admin/users/${pending.user.id}/reset-link`, { method: 'POST' });
        setIssued({ kind: 'link', ...res });
        setPending(null);
        reload();
        return;
      }
      if (pending.reset) {
        const res = await request(`/api/admin/users/${pending.user.id}/reset-password`, { method: 'POST' });
        setIssued({ kind: 'password', ...res });
        setPending(null);
        reload();
        return;
      }
      await request('/api/admin/users', { method: 'PATCH', body: JSON.stringify({ user_id: pending.user.id, ...pending.change }) });
      setNotice({ message: `Đã cập nhật tài khoản ${pending.user.email}.` }); setPending(null); reload();
    } catch (failure) { setNotice({ error: failure.message }); }
    finally { setBusy(false); }
  }
  return <div className="admin-page-shell">
    <header className="admin-page-header">
      <div>
        <h1>Quản lý tài khoản</h1>
      </div>
      <button type="button" className="admin-primary-btn" onClick={reload}>Tải lại</button>
    </header>

    <section className="admin-panel admin-panel--compact">
      <form className="admin-filter-grid" onSubmit={event => { event.preventDefault(); filter('search', search.trim()); }}>
        <label>Tìm tài khoản<input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Tên hoặc email" maxLength={200} /></label>
        <label>Vai trò<select value={filters.role} onChange={event => filter('role', event.target.value)}><option value="">Tất cả vai trò</option>{Object.entries(roleLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
        <label>Trạng thái<select value={filters.status} onChange={event => filter('status', event.target.value)}><option value="">Tất cả trạng thái</option><option value="active">Hoạt động</option><option value="locked">Đã khóa</option></select></label>
        <label>Cấp lại mật khẩu<select value={filters.pending_reset} onChange={event => filter('pending_reset', event.target.value)}><option value="">Tất cả</option><option value="true">Đang chờ cấp lại</option></select></label>
        <button type="submit" className="admin-secondary-btn">Tìm kiếm</button>
      </form>
    </section>

    <Notice {...notice} />
    {pending && <section className="lms-confirm admin-confirm" aria-label="Xác nhận thay đổi tài khoản">
      <p><strong>{pending.label}</strong> tài khoản {pending.user.email}?</p>
      <p>{pending.resetLink ? 'Liên kết đặt lại chỉ dùng một lần và tự hết hạn sau ít phút. Yêu cầu chờ hiện tại sẽ được xử lý.' : pending.reset ? 'Mật khẩu hiện tại sẽ ngừng hoạt động ngay. Mật khẩu tạm chỉ hiển thị một lần.' : 'Quyền truy cập sẽ được cập nhật ngay với các phiên đang đăng nhập.'}</p>
      <div className="lms-actions"><button disabled={busy} onClick={save}>{busy ? 'Đang lưu…' : 'Xác nhận'}</button><button disabled={busy} onClick={() => setPending(null)}>Hủy</button></div>
    </section>}
    {issued && <section className="lms-confirm admin-confirm" role="status" aria-label={issued.kind === 'link' ? 'Liên kết đặt lại mật khẩu' : 'Mật khẩu tạm'}>
      {issued.kind === 'link' ? <>
        <p>Liên kết đặt lại mật khẩu dùng một lần cho <strong>{issued.email}</strong>:<code className="admin-temp-password admin-temp-password--link">{issued.reset_url}</code></p>
        <p>Gửi riêng liên kết này cho người dùng để tự đặt mật khẩu mới (hết hạn lúc {new Date(issued.expires_at).toLocaleString('vi-VN')}). Liên kết chỉ dùng được 1 lần và không hiển thị lại.</p>
        <div className="lms-actions">
          <button onClick={() => navigator.clipboard?.writeText(issued.reset_url).then(() => setNotice({ message: 'Đã sao chép liên kết đặt lại mật khẩu.' }), () => setNotice({ error: 'Không sao chép được. Hãy chọn và sao chép thủ công.' }))}>Sao chép liên kết</button>
          <button onClick={() => setIssued(null)}>Đã gửi, ẩn đi</button>
        </div>
      </> : <>
        <p>Mật khẩu tạm của <strong>{issued.email}</strong>:<code className="admin-temp-password">{issued.temporary_password}</code></p>
        <p>Gửi riêng cho người dùng và nhắc họ đổi mật khẩu trong trang Hồ sơ sau khi đăng nhập. Mật khẩu này sẽ không hiển thị lại.</p>
        <div className="lms-actions">
          <button onClick={() => navigator.clipboard?.writeText(issued.temporary_password).then(() => setNotice({ message: 'Đã sao chép mật khẩu tạm.' }), () => setNotice({ error: 'Không sao chép được. Hãy chọn và sao chép thủ công.' }))}>Sao chép</button>
          <button onClick={() => setIssued(null)}>Đã gửi, ẩn đi</button>
        </div>
      </>}
    </section>}
    {loading ? <div className="admin-page-panel"><p role="status">Đang tải tài khoản…</p></div> : error ? <div className="admin-page-panel"><Notice error={error} /><button onClick={reload}>Thử lại</button></div> : <>
      <section className="admin-panel">
        <div className="lms-table-wrap"><table><caption className="sr-only">Danh sách tài khoản</caption><thead><tr><th>Người dùng</th><th>Vai trò</th><th>Trạng thái</th><th>Thao tác</th></tr></thead>
          <tbody>{data.items.map(user => <tr key={user.id}>
            <td>
              <strong>{user.full_name || 'Chưa có tên'}</strong>
              <span className="lms-secondary">{user.email}</span>
              {user.pending_password_reset && <span className="admin-reset-badge">Đang chờ cấp lại mật khẩu</span>}
            </td>
            <td>{roleLabels[user.role]}</td><td><span className={`lms-status ${user.status}`}>{user.status === 'active' ? 'Hoạt động' : 'Đã khóa'}</span></td>
            <td><div className="lms-actions">
              {user.role === 'admin'
                ? <span className="lms-secondary">Tài khoản quản trị</span>
                : <button disabled={busy} onClick={() => { setNotice({}); setPending({ user, change: { role: 'admin' }, label: 'Cấp quyền quản trị cho' }); }}>Cấp quyền Admin</button>}
              {user.role !== 'admin' && <button disabled={busy} onClick={() => { setNotice({}); setPending({ user, change: { role: user.role === 'teacher' ? 'user' : 'teacher' }, label: user.role === 'teacher' ? 'Thu hồi quyền giảng viên của' : 'Cấp quyền giảng viên cho' }); }}>{user.role === 'teacher' ? 'Thu hồi quyền GV' : 'Cấp quyền GV'}</button>}
              <button disabled={busy} onClick={() => { setNotice({}); setPending({ user, change: { status: user.status === 'active' ? 'locked' : 'active' }, label: user.status === 'active' ? 'Khóa' : 'Mở khóa' }); }}>{user.status === 'active' ? 'Khóa' : 'Mở khóa'}</button>
              {user.role !== 'admin' && <button disabled={busy} onClick={() => { setNotice({}); setIssued(null); setPending({ user, resetLink: true, label: 'Cấp link đặt lại mật khẩu cho' }); }}>Cấp link đặt lại</button>}
              {user.role !== 'admin' && <button disabled={busy} onClick={() => { setNotice({}); setIssued(null); setPending({ user, reset: true, label: 'Cấp mật khẩu tạm cho' }); }}>Cấp mật khẩu tạm</button>}
            </div></td>
          </tr>)}</tbody></table></div>
        {!data.items.length && <p className="admin-empty">Không có tài khoản phù hợp. Hãy thử tên, email hoặc bộ lọc khác.</p>}
        <Pagination page={page} total={data.total} onChange={setPage} disabled={busy} />
      </section>
    </>}
  </div>;
}
