import { ApiClient, ElectronApiClient, WebApiClient } from "./apiClient";

const isElectron = () => {
  return typeof window !== "undefined" && window.api && typeof window.api.invoke === "function";
};

const isWeb = () => {
  return typeof window !== "undefined" && !window.api;
};

export const createApiClient = (): ApiClient => {
  if (isElectron()) {
    return new ElectronApiClient();
  } else if (isWeb()) {
    const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
    return new WebApiClient(serverUrl);
  } else {
    throw new Error("Unknown runtime environment");
  }
};

export const apiClient = createApiClient();