import { Toolbar, ToolbarButton } from "@fluentui/react-components";
import {
  DismissRegular,
  MaximizeRegular,
  SubtractRegular,
} from "@fluentui/react-icons";
import { useQueryClient } from "@tanstack/react-query";
import "./menuBar.css";

interface AppConfig {
  name: string;
  version: string;
  serverUrl: string;
}

const MenuBar = () => {
  const queryClient = useQueryClient();
  const appInfo = queryClient.getQueryData(["appinfo"]) as
    | AppConfig
    | undefined;

  // Destructure with defaults to handle undefined case
  const { name = "Desktop Application", version = "1.0.0" } = appInfo || {};

  const handleMinimize = () => {
    window.api?.invoke("window-minimize");
  };

  const handleMaximize = () => {
    window.api?.invoke("window-maximize");
  };

  const handleClose = () => {
    window.api?.invoke("window-close");
  };

  return (
    <Toolbar className="toolbar">
      <div className="app-title">
        {name} v{version}
      </div>
      <div>
        <ToolbarButton icon={<SubtractRegular />} onClick={handleMinimize} />
        <ToolbarButton icon={<MaximizeRegular />} onClick={handleMaximize} />
        <ToolbarButton icon={<DismissRegular />} onClick={handleClose} />
      </div>
    </Toolbar>
  );
};

export default MenuBar;
