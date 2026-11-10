import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleProxyRequest, shouldProxyRequest } from './src/proxyHandler.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = Number.parseInt(process.env.PORT || '3000', 10);
const distPath = path.join(__dirname, 'dist');

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Keep application routes local; proxy only explicit proxy routes and upstream assets.
app.use((req, res, next) => {
  const pathname = new URL(req.url || '/', 'http://localhost').pathname;
  if (!shouldProxyRequest(pathname)) return next();
  void handleProxyRequest(req, res, next);
});

app.use(express.static(distPath));

// React Router SPA fallback for browser routes.
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`YESTAY Homes running on http://0.0.0.0:${PORT}`);
});
