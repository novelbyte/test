'use client'
import { useEffect } from 'react';

export default function Chatbot () {
    useEffect(() => {
        const initLandbot = () => {
            // Create the Landbot script element
            const script = document.createElement('script');
            script.type = "module";
            script.async = true;
            script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
            script.setAttribute("SameSite", "None");
            script.setAttribute("Secure", "true");

            // Wait until the script is fully loaded and initialize the Landbot Livechat
            script.addEventListener('load', () => {
                new window.Landbot.Livechat({
                    configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2780530-A8YNLNFGPY9Z15MP/index.json',
                });
            });

            // Append the script to the body to start loading
            document.body.appendChild(script);
        };

        // Trigger the chatbot to load on mouseover or touchstart
        window.addEventListener('mouseover', initLandbot, { once: true });
        window.addEventListener('touchstart', initLandbot, { once: true });

        return () => {
            // Cleanup event listeners when the component is unmounted
            window.removeEventListener('mouseover', initLandbot);
            window.removeEventListener('touchstart', initLandbot);
        };
    }, []);

    return null; // No UI rendered, just the chatbot functionality
}
