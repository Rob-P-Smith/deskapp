import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { useAppConfig } from "@hooks/useFileOperations";
import MenuBar from "@ui/viewComponents/menuBar/menuBar";
import Layout from "@ui/viewComponents/layout/layout";
import Help from "@ui/views/help/help";
import "./app.css";

const queryClient = new QueryClient();

const AppContent = () => {
  const { data: _appConfig, isLoading } = useAppConfig();

  if (isLoading) {
    return <div>Loading application...</div>;
  }

  return (
    <div className="app-container">
      <MenuBar />
      <div className="content-wrapper">
        <Layout>
          <Help />
        </Layout>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </FluentProvider>
  );
};

export default App;
