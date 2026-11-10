import React, { useEffect } from 'react';

interface SmartsuppQueue {
  (...args: unknown[]): void;
  _: unknown[][];
}

interface SmartsuppWindow extends Window {
  _smartsupp?: { key?: string };
  smartsupp?: SmartsuppQueue;
}

/** Loads the Smartsupp widget when VITE_SMARTSUPP_KEY is configured. */
export const SmartsuppChat: React.FC = () => {
  const key = import.meta.env.VITE_SMARTSUPP_KEY?.trim();

  useEffect(() => {
    if (!key) return;

    const chatWindow = window as SmartsuppWindow;
    chatWindow._smartsupp = { ...chatWindow._smartsupp, key };

    if (!chatWindow.smartsupp) {
      const queue = ((...args: unknown[]) => queue._.push(args)) as SmartsuppQueue;
      queue._ = [];
      chatWindow.smartsupp = queue;
    }

    if (!document.querySelector('script[data-smartsupp-widget]')) {
      const script = document.createElement('script');
      script.src = 'https://www.smartsuppchat.com/loader.js?';
      script.async = true;
      script.charset = 'utf-8';
      script.dataset.smartsuppWidget = 'true';
      document.head.appendChild(script);
    }
  }, [key]);

  return null;
};
