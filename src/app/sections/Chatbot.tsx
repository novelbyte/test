'use client';

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.async = true;
    script.onload = () => {
      const chatbotEmbed = document.createElement('zapier-interfaces-chatbot-embed');
      chatbotEmbed.setAttribute('is-popup', 'true');
      chatbotEmbed.setAttribute('chatbot-id', 'cm73dngzl000cqe8k002rdh9c'); // Podmień na swój ID
      document.body.appendChild(chatbotEmbed);
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
