import React from "react";
import styles from "../styles/Todo.module.scss";
export default function Todo({
  id,
  handleDelete,
  handleCheck,
  todo,
  isChecked,
}) {
  return (
    <li className={styles.todo} key={id}>
      {isChecked ? (
        <div
          className={styles.checkbox + " " + styles.checked}
          onClick={() => handleCheck(id)}
        >
          <img src="/images/icon-check.svg" />
        </div>
      ) : (
        <div className={styles.checkbox} onClick={() => handleCheck(id)}></div>
      )}
      {isChecked ? <s style={{ opacity: "0.3" }}>{todo}</s> : todo}
      <div className={styles.deleteBtn} onClick={() => handleDelete(id)}>
        <img src="/images/icon-cross.svg" />
      </div>
    </li>
  );
}
