import styles from "../styles/Footer.module.scss";
export default function Footer({ theme }) {
  return (
    <footer className={styles.footer}>
      <span className={theme === "light" ? null : styles.darkmode}>
        Drag and drop to reorder list
      </span>
      <small className={theme === "light" ? null : styles.darkmode}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/solutions"
          target="_blank"
          rel="noreferrer"
          className={theme === "light" ? null : styles.darkmode}
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/p-alex"
          target="_blank"
          rel="noreferrer"
          className={theme === "light" ? null : styles.darkmode}
        >
          Alex Daniel
        </a>
        .
      </small>
    </footer>
  );
}
