import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
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
    <Grid container className={defaultStyles.terminalContainer}>
      <Grid item container xs={12} alignContent={'flex-start'}>
        <Grid item>
          <img
            src='https://www.luos.io/img/index/header/buttons.svg'
            alt='window-buttons'
            width={100}
            height={15}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} className='terminal' ref={terminalRef} />
    </Grid>
  );
};
export default Terminal;
