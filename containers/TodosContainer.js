import styles from "../styles/Todos.module.scss";
import Todo from "../components/Todo";
export default function TodosContainer({
  todoArray,
  handleCheck,
  handleDelete,
}) {
  return (
    <ul className={styles.todos_container}>
      {todoArray.map((item, id) => (
        <Todo
          id={id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          todo={item.todo}
          isChecked={item.isChecked}
        />
      ))}
    </ul>
  );
}
