interface LandbotInstance {
  Livechat: new (config: { configUrl: string }) => any; // or use a more specific type for Livechat
}

declare global {
  interface Window {
    Landbot: LandbotInstance;
  }
}

export {};
