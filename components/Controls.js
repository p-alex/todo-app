import styles from "../styles/Controls.module.scss";
export default function Controls({
  handleFilterChange,
  todosLeft,
  handleClearCompleted,
  filter,
  theme,
}) {
  return (
    <div
      className={
        theme === "light"
          ? styles.controls
          : styles.controls + " " + styles.darkmode
      }
    >
      <div className={styles.controls_total}>
        {todosLeft} {todosLeft > 1 ? "items" : "item"} left
      </div>
      <div
        className={
          theme === "light"
            ? styles.controls_filters
            : styles.controls_filters + " " + styles.darkmode
        }
      >
        <span
          onClick={() => handleFilterChange("All")}
          className={filter === "All" ? styles.activeFilter : undefined}
        >
          All
        </span>
        <span
          onClick={() => handleFilterChange("Active")}
          className={filter === "Active" ? styles.activeFilter : undefined}
        >
          Active
        </span>
        <span
          onClick={() => handleFilterChange("Completed")}
          className={filter === "Completed" ? styles.activeFilter : undefined}
        >
          Completed
        </span>
      </div>
      <div className={styles.controls_clearCompleted}>
        <span onClick={handleClearCompleted}>Clear Completed</span>
      </div>
    </div>
  );
}
