import styles from "../styles/Header.module.scss";
export default function Header() {
  return (
    <div
      className={styles.header}
      style={{ backgroundImage: "url(/images/bg-desktop-light.jpg)" }}
    >
      <div className={styles.header_container}>
        <div className={styles.header_logoAndTheme}>
          <h1 className={styles.header_logo}>TODO</h1>
          <div className={styles.header_theme}>
            <img src="/images/icon-moon.svg" />
          </div>
        </div>
        <div className={styles.header_inputContainer}>
          <input
            type="text"
            placeholder="Create a new todo..."
            aria-label="Create a new todo..."
          />
        </div>
      </div>
    </div>
  );
}
