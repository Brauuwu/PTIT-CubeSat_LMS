import { useCallback, useEffect, useRef, useState } from 'react';
import ConfirmDialog from './ConfirmDialog';

/**
 * Promise-based confirmation: `const { ask, dialog } = useConfirm();` render `{dialog}` once,
 * then `if (!(await ask({ title, message, confirmLabel, tone }))) return;`.
 */
export function useConfirm() {
  const [pending, setPending] = useState(null);
  const resolver = useRef(null);

  const settle = useCallback(result => {
    resolver.current?.(result);
    resolver.current = null;
    setPending(null);
  }, []);

  const ask = useCallback(options => new Promise(resolve => {
    resolver.current?.(false);
    resolver.current = resolve;
    setPending(options);
  }), []);

  // A question left open when the page unmounts counts as "no".
  useEffect(() => () => { resolver.current?.(false); }, []);

  const dialog = pending ? <ConfirmDialog {...pending} onConfirm={() => settle(true)} onCancel={() => settle(false)} /> : null;
  return { ask, dialog };
}
