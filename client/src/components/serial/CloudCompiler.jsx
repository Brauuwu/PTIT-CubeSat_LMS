import { useState } from 'react';
import { useSerial } from '../../contexts/SerialContext';

export default function CloudCompiler({ code, onBinaryReady, inline = false }) {
  const [status, setStatus] = useState('idle');
  const [output, setOutput] = useState('');
  const { print } = useSerial();

  const appendLog = (msg, type = 'system') => {
    setOutput(prev => prev + msg + '\n');
    if (print) print(msg, type);
  };

  const handleCompile = async () => {
    if (!code || !code.trim()) {
      appendLog('Lỗi: Không có mã nguồn để biên dịch.', 'error');
      setStatus('error');
      return;
    }

    setStatus('compiling');
    appendLog('🔨 Bắt đầu biên dịch trên Cloud...', 'system');

    try {
      const res = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, board: 'esp32dev' }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        if (data.output) {
          data.output.split('\n').forEach(line => appendLog(line, 'rx'));
        }
        appendLog('✅ Biên dịch thành công!', 'system');
        appendLog(`📦 Kích thước: ${data.size || 'N/A'}`, 'system');
        if (onBinaryReady) onBinaryReady(data.binary);
      } else {
        setStatus('error');
        const errStr = data.output || data.error || 'Lỗi biên dịch không xác định';
        errStr.split('\n').forEach(line => appendLog(line, 'error'));
      }
    } catch (err) {
      // Mock response for development
      setStatus('success');
      appendLog('Platform: espressif32\nBoard: esp32dev\nFramework: arduino', 'rx');
      appendLog('─────────────────────────────────', 'rx');
      appendLog('Compiling .pio/build/main.cpp.o', 'rx');
      appendLog('Linking .pio/build/firmware.elf', 'rx');
      appendLog('Building .pio/build/firmware.bin', 'rx');
      appendLog('─────────────────────────────────', 'rx');
      appendLog('RAM:   [==        ]  15.2% (49856 bytes)', 'rx');
      appendLog('Flash: [====      ]  42.8% (561024 bytes)', 'rx');
      appendLog('✅ Biên dịch thành công! (Mock)', 'system');
      appendLog('⚠️ Cloud Compiler đang ở chế độ Mock.', 'error');
    }
  };

  const statusIcon = {
    idle: '🔨',
    compiling: '⏳',
    success: '✅',
    error: '❌',
  };

  if (inline) {
    return (
      <button
        className={`btn btn-sm ${status === 'compiling' ? 'btn-secondary' : 'btn-primary'}`}
        onClick={handleCompile}
        disabled={status === 'compiling'}
        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
      >
        {statusIcon[status]} {status === 'compiling' ? 'Đang biên dịch...' : 'Biên dịch'}
      </button>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>{statusIcon[status]} Biên dịch (Build)</h3>
        <button
          className={`btn btn-sm ${status === 'compiling' ? 'btn-secondary' : 'btn-primary'}`}
          onClick={handleCompile}
          disabled={status === 'compiling'}
        >
          {status === 'compiling' ? 'Đang biên dịch...' : 'Biên dịch'}
        </button>
      </div>
      {output && (
        <div className="card-body" style={{ padding: 0 }}>
          <pre style={{
            margin: 0,
            padding: 'var(--space-md)',
            background: 'var(--bg-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--font-size-xs)',
            color: status === 'error' ? 'var(--accent-red)' : 'var(--accent-green)',
            maxHeight: '200px',
            overflow: 'auto',
            whiteSpace: 'pre-wrap',
          }}>
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
