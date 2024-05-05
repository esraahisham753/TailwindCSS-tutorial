import { useEffect, useState } from "react"

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
    <div>
      {
        darkMode ? 
      }
    </div>
  )
}

export default Header
