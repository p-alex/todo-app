import { useState, useEffect } from "react";
import styles from "../styles/Todos.module.scss";
import Todo from "../components/Todo";
import Controls from "../components/Controls";
export default function TodosContainer({
  todoArray,
  handleCheck,
  handleDelete,
  filter,
  handleFilterChange,
  handleClearCompleted,
  theme,
}) {
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    let array = todoArray;
    switch (filter) {
      case "All":
        return setFilteredTodos(array);
      case "Active":
        return setFilteredTodos(array.filter((item) => !item.isChecked));
      case "Completed":
        return setFilteredTodos(array.filter((item) => item.isChecked));
      default:
        return setFilteredTodos(array);
    }
  }, [todoArray, filter]);

  return (
    <ul
      className={
        theme === "light"
          ? styles.todos_container
          : styles.todos_container + " " + styles.darkmode
      }
    >
      {filteredTodos.map((item, id) => (
        <Todo
          key={id}
          id={id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          todo={item.todo}
          isChecked={item.isChecked}
          theme={theme}
        />
      ))}
      {todoArray.length !== 0 && (
        <Controls
          handleFilterChange={handleFilterChange}
          totalItems={filteredTodos.length}
          handleClearCompleted={handleClearCompleted}
          filter={filter}
          theme={theme}
        />
      )}
    </ul>
  );
}
