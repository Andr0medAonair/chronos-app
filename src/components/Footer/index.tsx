import styles from './styles.module.css';

export function Footer() {
  return <footer className={styles.footer}>
    <a href="">How does the Pomodoro Technique works?</a>
    <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
  </footer>;
}
