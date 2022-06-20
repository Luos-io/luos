import { commonTheme } from './common';
import { lightTheme } from './light';
import { darkTheme } from './dark';

export const themes = {
  common: commonTheme,
  light: lightTheme,
  dark: darkTheme,
};

export const getTheme = (name: string) => {
  for (const [key, value] of Object.entries(themes)) {
    if (key === name) {
      return value;
    }
  }
  return undefined;
};

export default themes;
