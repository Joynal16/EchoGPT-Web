"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const d = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(d);
    document.documentElement.dataset.theme = d ? "dark" : "light";
  }, []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.dataset.theme = d ? "dark" : "light";
    localStorage.setItem("theme", d ? "dark" : "light");
  };
  return (
    <button className="btn ghost" onClick={toggle} aria-pressed={dark} aria-label="Toggle dark mode">
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
