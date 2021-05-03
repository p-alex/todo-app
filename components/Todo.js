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
      <div onClick={() => handleCheck(id)} className={styles.checkboxContainer}>
        {isChecked ? (
          <div className={styles.checkbox + " " + styles.checked}>
            <Image
              src="/images/icon-check.svg"
              width={11}
              height={11}
              alt="check"
            />
          </div>
        ) : (
          <div
            className={
              theme === "light"
                ? styles.checkbox
                : styles.checkbox + " " + styles.darkmode
            }
          ></div>
        )}
      </div>

      {isChecked ? (
        <p onClick={() => handleCheck(id)}>
          <s style={{ opacity: "0.3" }}>{todo}</s>
        </p>
      ) : (
        <p onClick={() => handleCheck(id)}>{todo}</p>
      )}
      <div className={styles.deleteBtn} onClick={() => handleDelete(id)}>
        <Image
          src="/images/icon-cross.svg"
          width={20}
          height={20}
          alt="cross"
        />
      </div>
    </li>
  );
}
