import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import Skill from "./components/skills/skills";
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      <div
        className={
          darkMode
            ? "bg-linear-to-br from-gray-950 via-[#030a17] to-gray-950 min-h-screen "
            : "bg-linear-to-br from-gray-50  to-blue-50 min-h-screen "
        }
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <Skill darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Project darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
