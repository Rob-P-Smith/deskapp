import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

const theme = {
  // Theme styling
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

// When the editor changes, you can get notified via the
// OnChangePlugin!
function onChange(editorState: any) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyOnChangePlugin({
  onChange,
}: {
  onChange: (editorState: any) => void;
}) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
}

function Placeholder() {
  return (
    <div style={editorStyles.editorPlaceholder}>
      Enter some text...
    </div>
  );
}

const initialConfig = {
  namespace: "MyEditor",
  theme,
  onError: (error: Error) => {
    console.error(error);
  },
};

// Inline styles object
const editorStyles = {
  container: {
    padding: "20px",
  },
  editorContainer: {
    margin: "20px auto 20px auto",
    borderRadius: "2px",
    maxWidth: "600px",
    color: "#000",
    position: "relative" as const,
    lineHeight: "20px",
    fontWeight: 400,
    textAlign: "left" as const,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  editorInput: {
    minHeight: "150px",
    resize: "none" as const,
    fontSize: "15px",
    caretColor: "rgb(5, 5, 5)",
    position: "relative" as const,
    tabSize: 1,
    outline: "0",
    padding: "15px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  editorPlaceholder: {
    color: "#999",
    overflow: "hidden" as const,
    position: "absolute" as const,
    textOverflow: "ellipsis",
    top: "15px",
    left: "10px",
    fontSize: "15px",
    userSelect: "none" as const,
    display: "inline-block",
    pointerEvents: "none" as const,
  },
};

const Edit = () => {
  return (
    <div style={editorStyles.container}>
      <h2>Lexical Editor</h2>
      <LexicalComposer initialConfig={initialConfig}>
        <div style={editorStyles.editorContainer}>
          <PlainTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input"
                style={editorStyles.editorInput}
              />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          <MyOnChangePlugin onChange={onChange} />
        </div>
      </LexicalComposer>
    </div>
  );
};

export default Edit;
