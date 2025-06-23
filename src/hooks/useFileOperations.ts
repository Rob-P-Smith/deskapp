import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../core/modules/api";

export interface AppConfig {
  name: string;
  version: string;
  serverUrl: string;
}

export const useLoadFile = (filepath: string | null) => {
  return useQuery({
    queryKey: ["file", filepath],
    queryFn: () => apiClient.loadFile(filepath!),
    enabled: !!filepath,
  });
};

export const useSaveFile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      content,
      filepath,
    }: {
      content: string;
      filepath: string;
    }) => apiClient.saveFile(content, filepath),
    onSuccess: (_, { filepath }) => {
      queryClient.invalidateQueries({ queryKey: ["file", filepath] });
      queryClient.invalidateQueries({ queryKey: ["recent-files"] });
    },
  });
};

export const useRecentFiles = () => {
  return useQuery({
    queryKey: ["recent-files"],
    queryFn: () => apiClient.getRecentFiles(),
    staleTime: 5 * 60 * 1000,
  });
};

export const useAppConfig = () => {
  return useQuery({
    queryKey: ["appinfo"],
    queryFn: async (): Promise<AppConfig> => {
      return await window.api?.invoke("get-app-config");
    },
    staleTime: Infinity,
  });
};
