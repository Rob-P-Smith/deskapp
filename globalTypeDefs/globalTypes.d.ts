/// <reference types="vite/client" />

declare const __APP_VERSION__: string;
declare const __IS_ELECTRON__: boolean;
declare const __SERVER_URL__: string;

interface ImportMetaEnv {
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
  readonly SSR: boolean;
  [key: string]: any;
}

declare global {
  interface Window {
    api?: {
      send: (channel: string, data: any) => void;
      receive: (channel: string, func: (...args: any[]) => void) => void;
      invoke: (channel: string, data?: any) => Promise<any>;
    };
  }
}

export {};
