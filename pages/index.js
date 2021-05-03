import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodosContainer from "../containers/TodosContainer";
import Head from "next/head";

export default function Home() {
  const [todoArray, setTodoArray] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("dark");
  const [toggleInitializeData, setToggleInitializeData] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "en-us";
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "var(--VeryLightGray)" : "var(--VeryDarkBlue)";
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("appData") === null) {
      localStorage.setItem(
        "appData",
        JSON.stringify({
          todoArray: [
            {
              todo: "Complete online javascript course",
              isChecked: true,
              id: 0,
            },
            { todo: "Jog around the park 3x", isChecked: false, id: 1 },
            { todo: "10 minutes meditation", isChecked: false, id: 2 },
            { todo: "Read for 1 hour", isChecked: false, id: 3 },
            { todo: "Pick up groceries", isChecked: false, id: 4 },
            {
              todo: "Complete Todo App on Frontend Mentor",
              isChecked: false,
              id: 5,
            },
          ],
          appTheme: "dark",
        })
      );
    }
    setTodoArray(JSON.parse(localStorage.getItem("appData")).todoArray);
    setTheme(JSON.parse(localStorage.getItem("appData")).appTheme);
  }, [toggleInitializeData]);

  useEffect(() => {
    let appData = JSON.parse(localStorage.getItem("appData"));
    let updatedData = (appData = { ...appData, todoArray });
    localStorage.setItem("appData", JSON.stringify(updatedData));
  }, [todoArray]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleThemeChange = () => {
    let appData = JSON.parse(localStorage.getItem("appData"));
    if (appData.appTheme === "light") {
      appData = { ...appData, appTheme: "dark" };
    } else {
      appData = { ...appData, appTheme: "light" };
    }
    localStorage.setItem("appData", JSON.stringify(appData));
    setToggleInitializeData(!toggleInitializeData);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (input) {
      let appData = JSON.parse(localStorage.getItem("appData"));
      let todoArray = appData.todoArray;
      todoArray = [
        ...todoArray,
        { todo: input, isChecked: false, id: todoArray.length },
      ];
      let updatedData = (appData = { ...appData, todoArray });
      localStorage.setItem("appData", JSON.stringify(updatedData));
      setInput("");
      setToggleInitializeData(!toggleInitializeData);
    }
  };

  const handleCheck = (itemID) => {
    let appData = JSON.parse(localStorage.getItem("appData"));
    let updatedData = {
      ...appData,
      todoArray: appData.todoArray.map((item) => {
        if (item.id === itemID) return { ...item, isChecked: !item.isChecked };
        return item;
      }),
    };
    localStorage.setItem("appData", JSON.stringify(updatedData));
    setToggleInitializeData(!toggleInitializeData);
  };

  const handleDelete = (itemID) => {
    let appData = JSON.parse(localStorage.getItem("appData"));
    let updatedData = {
      ...appData,
      todoArray: appData.todoArray.filter((item) => item.id !== itemID),
    };
    localStorage.setItem("appData", JSON.stringify(updatedData));
    setToggleInitializeData(!toggleInitializeData);
  };

  const handleFilterChange = (filter) => setFilter(filter);

  const handleClearCompleted = () =>
    setTodoArray(todoArray.filter((item) => !item.isChecked));

  return (
    <>
      <Head>
        <title>
          Todo app with ThemeSwitch and localStorage | Next.js and
          react-sortablejs
        </title>
        <meta
          name="keywords"
          content="html, css, javaScript, theme, switch, nextjs, react-sortablejs, localStorage, frontend, mentor, react, todo, app,  front, end"
        />
        <meta
          name="description"
          content="This todo app was created using nextjs, sass, react-sortablejs, and localStorage. Challenge by Frontend Mentor."
        />
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="/images/favicon-32x32.png"
        />
      </Head>
      <Banner theme={theme}>
        <Header
          input={input}
          handleInputChange={handleInputChange}
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
