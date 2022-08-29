import React, { useEffect, useRef } from 'react';
import * as Xterm from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

import 'xterm/css/xterm.css';
import defaultStyles from './terminal.module.css';

interface TerminalProps {
  code: string;
  readOnly: boolean;
  styles: Xterm.ITheme;
}

const fitAddon = new FitAddon();

export const Terminal = ({ code, readOnly = true, styles }: TerminalProps) => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Xterm.Terminal({
      cursorBlink: !readOnly,
      disableStdin: readOnly,
      theme: {
        ...defaultStyles.terminal,
        ...styles,
      },
    });

    const prompt = () => {
      var shellprompt = '$ ';
      terminal.write('\r\n' + shellprompt);
    };

    if (terminalRef.current) {
      terminal.loadAddon(fitAddon);
      terminal.open(terminalRef.current);
      terminal.writeln('Please enter any string then press enter:');

      if (!readOnly) {
        terminal.onKey((key) => {
          const char = key.domEvent.key;
          if (char === 'Enter') {
            prompt();
          } else if (char === 'Backspace') {
            terminal.write('\b \b');
          } else {
            terminal.write(char);
          }
        });

        prompt();
      }

      terminal.onRender(() => fitAddon.fit());
    }
  }, [readOnly, styles]);

  return (
    <div id='terminal-container'>
      <div id='terminal' ref={terminalRef} />
    </div>
  );
};
export default Terminal;
