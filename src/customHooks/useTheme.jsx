// import { useEffect, useState } from "react";

// export const useTheme = () => {
//   const [mode, setMode] = useState("light");

//   function changeTheme() {
//     const html = document.documentElement;

//     if (mode == "light") {
//       html.classList.remove("light");
//       html.classList.add("dark");
//       setMode("dark");
//       localStorage.setItem("mode", "dark");
//     } else {
//       html.classList.remove("dark");
//       html.classList.add("light");
//       setMode("light");
//       localStorage.setItem("mode", "light");
//     }
//   }

//   useEffect(() => {
//     const currentMode = localStorage.getItem("mode") || "light";
//     document.documentElement.classList.add(currentMode);
//     setMode(currentMode);
//   }, []);

//   return { changeTheme, mode }
// };


import { useState, useEffect } from "react";

export function useTheme() {
  // Check system preference immediately (no delay)
  const getInitialTheme = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}
