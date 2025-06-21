export interface ApiClient {
  saveFile(content: string, filepath: string): Promise<void>;
  loadFile(filepath: string): Promise<string>;
  getRecentFiles(): Promise<string[]>;
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

export class ElectronApiClient implements ApiClient {
  async saveFile(content: string, filepath: string): Promise<void> {
    if (!window.api) {
      throw new Error("Electron API not available");
    }
    return window.api.invoke("save-file", { content, filepath });
  }

  async loadFile(filepath: string): Promise<string> {
    if (!window.api) {
      throw new Error("Electron API not available");
    }
    return window.api.invoke("load-file", filepath);
  }

  async getRecentFiles(): Promise<string[]> {
    if (!window.api) {
      throw new Error("Electron API not available");
    }
    return window.api.invoke("get-recent-files");
  }
}

export class WebApiClient implements ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async saveFile(content: string, filepath: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/api/files`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, filepath }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save file: ${response.statusText}`);
    }
  }

  async loadFile(filepath: string): Promise<string> {
    const response = await fetch(
      `${this.baseUrl}/api/files/${encodeURIComponent(filepath)}`
    );

    if (!response.ok) {
      throw new Error(`Failed to load file: ${response.statusText}`);
    }

    return response.text();
  }

  async getRecentFiles(): Promise<string[]> {
    const response = await fetch(`${this.baseUrl}/api/recent-files`);

    if (!response.ok) {
      throw new Error(`Failed to get recent files: ${response.statusText}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid response: expected array of files");
    }

    return data;
  }
}