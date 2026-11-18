import { useState } from 'react';
import { EyeIcon } from './AuthIcons';

export default function PasswordInput({
  className = '',
  wrapClassName = '',
  hasError = false,
  ...props
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`auth-input-wrap${hasError ? ' has-error' : ''}${wrapClassName ? ` ${wrapClassName}` : ''}`}>
      <input
        {...props}
        className={className || undefined}
        type={visible ? 'text' : 'password'}
      />
      <button
        type="button"
        className="auth-toggle-visibility"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setVisible((current) => !current)}
        aria-label={visible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
        aria-pressed={visible}
        title={visible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
      >
        <EyeIcon open={visible} />
      </button>
    </div>
  );
}

