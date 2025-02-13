'use client';

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    const initZapierChatbot = () => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
      script.async = true;
      script.onload = () => {
        const chatbotEmbed = document.createElement('zapier-interfaces-chatbot-embed');
        chatbotEmbed.setAttribute('is-popup', 'true');
        chatbotEmbed.setAttribute('chatbot-id', 'cm73dngzl000cqe8k002rdh9c'); // Replace with your Zapier chatbot ID
        document.body.appendChild(chatbotEmbed);
      };
      document.body.appendChild(script);
    };

    window.addEventListener('mouseover', initZapierChatbot, { once: true });
    window.addEventListener('touchstart', initZapierChatbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initZapierChatbot);
      window.removeEventListener('touchstart', initZapierChatbot);
    };
  }, []);

  return null;
}
