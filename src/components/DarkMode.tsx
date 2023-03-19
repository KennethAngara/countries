import { useEffect, useState } from 'react'

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
    <button className="bg-green-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>Dark Mode</button>
  )
}

export default DarkMode