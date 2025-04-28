import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = React.useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailableThemes ?? "dark"
    return storageTheme
  });

  const nextThemeIcon = {
    "dark": <SunIcon />,
    "light": <MoonIcon />
  }

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(previousTheme => {
      const nextTheme = previousTheme === 'light' ? 'dark' : 'light';
      return nextTheme;
    });
  }  

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme)

    return () => {
      console.log("Cleanup function...")
    }
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink      
        className={styles.menuLink}
        href='/'
        aria-label='Go to home page'
        title='Go to home page'
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='/history/'
        aria-label='See tasks history'
        title='See tasks history'
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='/settings/'
        aria-label='Change settings'
        title='Change settings'
      >
        <SettingsIcon />
      </RouterLink>
      <a
        className={styles.menuLink}
        href='####'
        aria-label='Change colour theme'
        title='Change colour theme'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
