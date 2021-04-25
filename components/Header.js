import { useState } from "react";
import FlipMove from "react-flip-move";
import styles from "../styles/Header.module.scss";
export default function Header() {
  const [input, setInput] = useState("");
  const [todoArray, setTodoArray] = useState([
    { todo: "Complete online javascript course", isChecked: true },
    { todo: "Jog around the park 3x", isChecked: false },
    { todo: "10 minutes meditation", isChecked: false },
    { todo: "Read for 1 hour", isChecked: false },
    { todo: "Pick up groceries", isChecked: false },
    { todo: "Complete Todo App on Frontend Mentor", isChecked: false },
  ]);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setTodoArray([...todoArray, { todo: input, isChecked: false }]);
      setInput("");
    }
  };

  const handleCheck = (itemId) => {
    const updatedArray = todoArray.map((item, id) => {
      if (itemId === id) {
        item.isChecked = !item.isChecked;
        return item;
      }
      return item;
    });

    setTodoArray(updatedArray);
  };

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
        <form onSubmit={handleSubmit}>
          <div className={styles.header_inputContainer}>
            <input
              type="text"
              placeholder="Create a new todo..."
              aria-label="Create a new todo..."
              value={input}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <ul className={styles.todosContainer}>
        <FlipMove easing="ease-in">
          {todoArray.map((item, id) => (
            <li
              className={styles.todo}
              key={id}
              onClick={() => handleCheck(id)}
            >
              {item?.isChecked ? (
                <div className={styles.checkbox + " " + styles.checked}>
                  <img src="/images/icon-check.svg" />
                </div>
              ) : (
                <div className={styles.checkbox}></div>
              )}
              {item?.isChecked ? (
                <s style={{ opacity: "0.3" }}>{item?.todo}</s>
              ) : (
                item?.todo
              )}
            </li>
          ))}
        </FlipMove>
      </ul>
    </div>
  );
}
