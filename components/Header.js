import Image from "next/image";
import styles from "../styles/Header.module.scss";
export default function Header({ input, handleChange, handleAdd }) {
  return (
    <>
      <div className={styles.header_logoAndTheme}>
        <h1 className={styles.header_logo}>TODO</h1>
        <div className={styles.header_theme}>
          <Image src="/images/icon-moon.svg" width={25} height={25} />
        </div>
      </div>
      <form onSubmit={handleAdd}>
        <div className={styles.header_inputContainer}>
          <div className={styles.checkbox}></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            aria-label="Create a new todo..."
            value={input}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}
