import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="/">
          <img className={styles.vector} src="/images/Vector.svg" alt="logo" />
          <img className={styles.logo} src="/images/logo.svg" alt="logo" />
          <img className={styles.svg} src="/images/svg.svg" alt="logo" />
        </a>
      </div>
    </header>
  );
}
