// Waits until the dev backend answers before Vite starts, so the first /api requests are not refused.
// Never blocks development: after the timeout it only warns and lets Vite start anyway.
const port = Number(process.env.VITE_BACKEND_PORT || 8005);
const url = `http://127.0.0.1:${port}/api/auth/google/config`;
const timeoutMs = 90_000;
const started = Date.now();

while (Date.now() - started < timeoutMs) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(2000) });
    if (response.ok) process.exit(0);
  } catch {
    // Backend not listening yet.
  }
  await new Promise(resolve => setTimeout(resolve, 500));
}
console.warn(`Backend did not answer on port ${port} within ${timeoutMs / 1000}s; starting Vite anyway.`);
