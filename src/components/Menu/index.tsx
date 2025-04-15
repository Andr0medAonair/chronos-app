import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router';

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
      <Link      
        className={styles.menuLink}
        to='/'
        aria-label='Go to home page'
        title='Go to home page'
      >
        <HouseIcon />
      </Link>
      <a
        className={styles.menuLink}
        href='####'
        aria-label='See tasks history'
        title='See tasks history'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='####'
        aria-label='Change settings'
        title='Change settings'
      >
        <SettingsIcon />
      </a>
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
