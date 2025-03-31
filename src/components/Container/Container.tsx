import styles from "./Container.module.css";

type Container = {
  children: React.ReactNode;
};

export function Container({ children }: Container) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
}
