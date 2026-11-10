import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof window !== 'undefined') {
  const dummyHub = {
    load: () => {},
    hasConsented: () => true,
    openSettings: () => {},
    closeSettings: () => {},
    allowAll: () => {},
    denyAll: () => {},
    on: () => {},
    off: () => {},
    setUserConsent: () => {},
    getUserConsent: () => ({ necessary: true, analytics: true, functional: true, marketing: true }),
    getConsent: () => true,
    showUI: () => {}
  };
  (window as any).cookiehub = (window as any).cookiehub || dummyHub;
  (window as any).__cookiehub = (window as any).__cookiehub || dummyHub;
}

createRoot(document.getElementById('root')!).render(<App />);
