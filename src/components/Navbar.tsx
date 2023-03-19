import DarkMode from "./DarkMode"
import Filters from "./Filters"

const Navbar = () => {

  return (
    <nav className="sm:px-16 hidden sm:flex sm:space-x-3 px-6 py-3 sticky top-0 left-0 w-full bg-white dark:bg-slate-900 justify-between items-center z-40 nav-shadow">
      <p className="text-2xl font-semibold text-[#2b2b2b] dark:text-[white]">Countries</p>
      <div className="flex space-x-5">
        <Filters/>
        <DarkMode/>
      </div>
    </nav>
  )
}

export default Navbar