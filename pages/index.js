import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TodosContainer from "../containers/TodosContainer";

export default function Home() {
  const [todoArray, setTodoArray] = useState([
    { todo: "Complete online javascript course", isChecked: true },
    { todo: "Jog around the park 3x", isChecked: false },
    { todo: "10 minutes meditation", isChecked: false },
    { todo: "Read for 1 hour", isChecked: false },
    { todo: "Pick up groceries", isChecked: false },
    { todo: "Complete Todo App on Frontend Mentor", isChecked: false },
  ]);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "white" : "var(--VeryDarkBlue)";
  }, [theme]);

  const handleChange = (e) => setInput(e.target.value);

  const handleAdd = (e) => {
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

  const handleDelete = (itemId) =>
    setTodoArray(todoArray.filter((item, id) => id !== itemId));

  const handleClearCompleted = () =>
    setTodoArray(todoArray.filter((item) => !item.isChecked));

  const handleFilterChange = (filter) => setFilter(filter);

  const handleThemeChange = () => {
    if (theme === "light") return setTheme("dark");
    if (theme === "dark") return setTheme("light");
  };

  return (
    <>
      <Banner theme={theme}>
        <Header
          input={input}
          handleChange={handleChange}
          handleAdd={handleAdd}
          handleThemeChange={handleThemeChange}
          theme={theme}
        />
      </Banner>
      <TodosContainer
        todoArray={todoArray}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleClearCompleted={handleClearCompleted}
        theme={theme}
      />
    </>
  );
}
