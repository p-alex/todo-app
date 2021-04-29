import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodosContainer from "../containers/TodosContainer";

export default function Home() {
  const [todoArray, setTodoArray] = useState([
    { todo: "Complete online javascript course", isChecked: true, id: 0 },
    { todo: "Jog around the park 3x", isChecked: false, id: 1 },
    { todo: "10 minutes meditation", isChecked: false, id: 2 },
    { todo: "Read for 1 hour", isChecked: false, id: 3 },
    { todo: "Pick up groceries", isChecked: false, id: 4 },
    { todo: "Complete Todo App on Frontend Mentor", isChecked: false, id: 5 },
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
      setTodoArray([
        ...todoArray,
        { todo: input, isChecked: false, id: todoArray.length },
      ]);
      setInput("");
    }
  };
  const handleCheck = (itemId) => {
    const updatedArray = todoArray.map((item) => {
      if (itemId === item.id) {
        item.isChecked = !item.isChecked;
        return item;
      }
      return item;
    });
    setTodoArray(updatedArray);
  };

  const handleDelete = (itemId) =>
    setTodoArray(todoArray.filter((item) => item.id !== itemId));

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
        setTodoArray={setTodoArray}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleClearCompleted={handleClearCompleted}
        theme={theme}
      />
      <Footer theme={theme} />
    </>
  );
}
