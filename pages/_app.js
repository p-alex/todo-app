import "../styles/globals.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!localStorage.getItem("todos")) localStorage.setItem("todos", "[]");
  });
  return <Component {...pageProps} />;
}

export default MyApp;
