import styles from "../styles/Controls.module.scss";
export default function Controls({
  handleFilterChange,
  totalItems,
  handleClearCompleted,
  filter,
}) {
  return (
    <div className={styles.controls}>
      <div className={styles.controls_total}>
        {totalItems} {totalItems > 1 ? "items" : "item"}
      </div>
      <div className={styles.controls_filters}>
        <span
          onClick={() => handleFilterChange("All")}
          className={filter === "All" && styles.activeFilter}
        >
          All
        </span>
        <span
          onClick={() => handleFilterChange("Active")}
          className={filter === "Active" && styles.activeFilter}
        >
          Active
        </span>
        <span
          onClick={() => handleFilterChange("Completed")}
          className={filter === "Completed" && styles.activeFilter}
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
