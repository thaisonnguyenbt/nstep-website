import { useEffect, useState } from 'react';
import { Color } from 'schema';

const useDarkMode = (isDark, backgroundColor?: Color) => {
  const [theme, setTheme] = useState(isDark ? 'dark' : 'light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  const color = backgroundColor?.hex;

  useEffect(() => {
    if (!isDark && backgroundColor?.hex) {
      document.body.style.backgroundColor = backgroundColor?.hex;
    } else {
      document.body.style.backgroundColor = 'inherit';
    }
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, color, setTheme];
};

export default useDarkMode;
