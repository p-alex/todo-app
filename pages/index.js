import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodosContainer from "../containers/TodosContainer";

export default function Home() {
  const [todoArray, setTodoArray] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("light");
  const [toggleInitializeArray, setToggleInitializeArray] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("todoArray") === null)
      localStorage.setItem(
        "todoArray",
        JSON.stringify([
          { todo: "Complete online javascript course", isChecked: true, id: 0 },
          { todo: "Jog around the park 3x", isChecked: false, id: 1 },
          { todo: "10 minutes meditation", isChecked: false, id: 2 },
          { todo: "Read for 1 hour", isChecked: false, id: 3 },
          { todo: "Pick up groceries", isChecked: false, id: 4 },
          {
            todo: "Complete Todo App on Frontend Mentor",
            isChecked: false,
            id: 5,
          },
        ])
      );
    setTodoArray(JSON.parse(localStorage.getItem("todoArray")));
  }, [toggleInitializeArray]);

  useEffect(() => {
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }, [todoArray]);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "white" : "var(--VeryDarkBlue)";
  }, [theme]);

  const handleChange = (e) => setInput(e.target.value);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input) {
      let array = JSON.parse(localStorage.getItem("todoArray"));
      let updatedArray = [
        ...array,
        { todo: input, id: array.length, isChecked: false },
      ];
      localStorage.setItem("todoArray", JSON.stringify(updatedArray));
      setInput("");
      setToggleInitializeArray(!toggleInitializeArray);
    }
  };

  const handleCheck = (itemID) => {
    console.log(itemID);
    let array = JSON.parse(localStorage.getItem("todoArray"));
    let updatedArray = array.map((item) => {
      if (itemID === item.id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    localStorage.setItem("todoArray", JSON.stringify(updatedArray));
    setToggleInitializeArray(!toggleInitializeArray);
  };

  const handleDelete = (itemID) => {
    let array = JSON.parse(localStorage.getItem("todoArray"));
    let updatedArray = array.filter((item) => item.id !== itemID);
    localStorage.setItem("todoArray", JSON.stringify(updatedArray));
    setToggleInitializeArray(!toggleInitializeArray);
  };

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
