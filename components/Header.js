import Image from "next/image";
import styles from "../styles/Header.module.scss";
export default function Header({
  input,
  handleInputChange,
  handleAdd,
  handleThemeChange,
  theme,
}) {
  return (
    <>
      <div className={styles.header_logoAndTheme}>
        <h1 className={styles.header_logo}>TODO</h1>
        <div className={styles.header_theme} onClick={handleThemeChange}>
          <Image
            src={`/images/icon-${theme === "light" ? "moon" : "sun"}.svg`}
            width={25}
            height={25}
          />
        </div>
      </div>
      <form onSubmit={handleAdd}>
        <div
          className={
            theme === "light"
              ? styles.header_inputContainer
              : styles.header_inputContainer + " " + styles.darkmode
          }
        >
          <div className={styles.checkbox}></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            aria-label="Create a new todo..."
            value={input}
            onChange={handleInputChange}
            className={theme === "light" ? undefined : styles.darkmode}
          />
        </div>
      </form>
    </>
  );
}
