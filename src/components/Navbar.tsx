import { useStateContextProvider } from '../context/StateContext'
import MobileFilter from "./MobileFilter"
import DarkMode from "./DarkMode"
import Filters from "./Filters"
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const { toggle, setToggle } = useStateContextProvider()

  return (
    <nav className="sm:px-16 flex sm:space-x-3 px-6 py-3 sticky top-0 left-0 w-full bg-white dark:bg-slate-900 justify-between items-center z-40 nav-shadow">
      <a href="#" className="text-2xl font-semibold text-[#2b2b2b] dark:text-[white]">Countries</a>
      <div className="flex space-x-5 overflow-hidden">
        <Filters/>
        <DarkMode/>
        {!toggle && <button onClick={() => setToggle(true)}><GiHamburgerMenu className='block sm:hidden w-[25px] h-[25px]'/></button>}
        <MobileFilter/>
      </div>
    </nav>
  )
}

export default Navbar