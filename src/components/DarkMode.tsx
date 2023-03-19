import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from "react-icons/fa"

const DarkMode = () => {
    const [theme, setTheme] = useState<string | null>(null);
    
    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    }, [])
    
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
    
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    }

  return (
    <button onClick={handleThemeSwitch}>
      {theme === "dark" ? <FaSun className='text-yellow-400 h-[25px] w-[25px]'/> : <FaMoon className='text-purple-600 h-[25px] w-[25px]'/>}
    </button>
  )
}

export default DarkMode