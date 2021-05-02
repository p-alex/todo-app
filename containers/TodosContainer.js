import styles from "../styles/Todos.module.scss";
import Todo from "../components/Todo";
import Controls from "../components/Controls";
import { ReactSortable } from "react-sortablejs";
export default function TodosContainer({
  todoArray,
  setTodoArray,
  handleCheck,
  handleDelete,
  filter,
  handleFilterChange,
  handleClearCompleted,
  theme,
}) {
  let displayList = () => {
    if (filter === "All") {
      return todoArray.map((item, id) => {
        return (
          <Todo
            key={id}
            id={item.id}
            todo={item.todo}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            isChecked={item.isChecked}
            theme={theme}
          />
        );
      });
    } else if (filter === "Active") {
      let array = todoArray.filter((item) => item.isChecked === false);
      return array.map((item, id) => {
        return (
          <Todo
            key={id}
            id={item.id}
            todo={item.todo}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            isChecked={item.isChecked}
            theme={theme}
          />
        );
      });
    } else if (filter === "Completed") {
      let array = todoArray.filter((item) => item.isChecked === true);
      return array.map((item, id) => {
        return (
          <Todo
            key={id}
            id={item.id}
            todo={item.todo}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            isChecked={item.isChecked}
            theme={theme}
          />
        );
      });
    }
  };

  const todosLeft = () => {
    let count = 0;
    todoArray.map((item) => !item.isChecked && count++);
    return count;
  };

  return (
    <ul
      className={
        theme === "light"
          ? styles.todos_container
          : styles.todos_container + " " + styles.darkmode
      }
    >
      <ReactSortable
        list={todoArray}
        setList={setTodoArray}
        delayOnTouchOnly={true}
        delay={200}
        animation={300}
      >
        {displayList()}
      </ReactSortable>

      {todoArray.length !== 0 && (
        <Controls
          handleFilterChange={handleFilterChange}
          todosLeft={todosLeft()}
          handleClearCompleted={handleClearCompleted}
          filter={filter}
          theme={theme}
        />
      )}
    </ul>
  );
}
