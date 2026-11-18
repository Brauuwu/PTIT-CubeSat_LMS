import Editor from '@monaco-editor/react';
import { DEFAULT_ARDUINO_CODE } from './project-files.js';
import { registerCppCompletions } from './cpp-completions.js';

export default function MonacoEditor({ code, onChange, readOnly = false, height = '400px' }) {
  return (
    <Editor
      height={height}
      defaultLanguage="cpp"
      theme="vs-dark"
      value={code ?? DEFAULT_ARDUINO_CODE}
      onChange={onChange}
      beforeMount={registerCppCompletions}
      options={{
        readOnly,
        minimap: { enabled: false },
        fontSize: 13,
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        lineNumbers: 'on',
        scrollBeyondLastLine: false,
        wordWrap: 'on',
        tabSize: 4,
        formatOnPaste: true,
        automaticLayout: true,
        // Suggest only functions and variables (cpp-completions.js): no words copied from
        // comments/strings, no keywords, no snippets.
        wordBasedSuggestions: 'off',
        quickSuggestions: { other: true, comments: false, strings: false },
        suggest: {
          showKeywords: false,
          showSnippets: false,
          showWords: false,
        },
        padding: { top: 8 },
      }}
    />
  );
}
