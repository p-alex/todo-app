import Image from "next/image";
import styles from "../styles/Todo.module.scss";
export default function Todo({
  id,
  handleDelete,
  handleCheck,
  todo,
  isChecked,
  theme,
}) {
  return (
    <li
      className={
        theme === "light" ? styles.todo : styles.todo + " " + styles.darkmode
      }
      key={id}
    >
      {isChecked ? (
        <div
          className={styles.checkbox + " " + styles.checked}
          onClick={() => handleCheck(id)}
        >
          <Image src="/images/icon-check.svg" width={11} height={11} />
        </div>
      ) : (
        <div className={styles.checkbox} onClick={() => handleCheck(id)}></div>
      )}
      {isChecked ? (
        <p onClick={() => handleCheck(id)}>
          <s style={{ opacity: "0.3" }}>{todo}</s>
        </p>
      ) : (
        <p onClick={() => handleCheck(id)}>{todo}</p>
      )}
      <div className={styles.deleteBtn} onClick={() => handleDelete(id)}>
        <Image src="/images/icon-cross.svg" width={20} height={20} />
      </div>
    </li>
  );
}
