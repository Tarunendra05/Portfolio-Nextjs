import React from "react";
import Header from './components/Header';
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-teal-300">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
