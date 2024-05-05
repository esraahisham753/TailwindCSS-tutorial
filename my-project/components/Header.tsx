import { useEffect, useState } from "react"
import { Sun } from "./Sun";
import { Moon } from "./Moon";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
        localStorage.setItem('darkMode', 'true');
        window.document.documentElement.classList.add('dark');
    }
    else if (darkMode === false) {
        localStorage.setItem('darkMode', 'false');
        window.document.documentElement.classList.remove('dark');
    }
    else {
        setDarkMode(localStorage.getItem('darkMode') === 'true');
    }
  }, [darkMode]);

  return (
    <div onClick={changeMode} className="cursor-pointer">
      {
        darkMode ? <Sun /> : <Moon />
      }
    </div>
  )
}

export default Header
