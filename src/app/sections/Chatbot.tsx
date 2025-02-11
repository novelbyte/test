'use client';
import { useEffect } from 'react';

// Define the interface for Landbot
interface Landbot {
  Livechat: new (config: { configUrl: string }) => {
    start: () => void;
  };
}

// Declare Landbot on the window object
declare global {
  interface Window {
    Landbot: Landbot;
  }
}

export default function Chatbot() {
  useEffect(() => {
    const initLandbot = () => {
      let myLandbot;
      if (!myLandbot) {
        const script = document.createElement('script');
        script.type = "module";
        script.async = true;
        script.addEventListener('load', function () {
          myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2780530-A8YNLNFGPY9Z15MP/index.json',
          });
        });
        script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
        document.body.appendChild(script);
      }
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null; // This component does not render anything to the UI
}