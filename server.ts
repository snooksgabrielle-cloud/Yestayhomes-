import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleProxyRequest } from './src/proxyHandler.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Attach proxy handler for upstream proxying & inspection
app.use((req, res, next) => {
  handleProxyRequest(req, res, next);
});

// Serve static frontend in production
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to SPA index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`YESTAY Homes Proxy & App running on http://0.0.0.0:${PORT}`);
});
