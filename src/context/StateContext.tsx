import { useState, createContext, useContext } from "react";
import { Children } from "../types/Children";
import { StateType } from "../types/StateTypes";

const StateContext = createContext({} as StateType);

export const StateContextProvider = ({children}: Children) => {

  const [ countries, setCountries ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ searchQuery, setSearchQuery ] = useState('')
  const [area, setArea] = useState(0)
  const [region, setRegion] = useState('')
  const [alphabetical, setAlphabetical] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(30)
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)
  const [toggle, setToggle] = useState(false)

  return (
    <StateContext.Provider value={{
      countries,
      setCountries,
      loading,
      setLoading,
      searchQuery,
      setSearchQuery,
      area,
      setArea,
      region,
      setRegion,
      alphabetical,
      setAlphabetical,
      currentPage,
      setCurrentPage,
      countriesPerPage,
      setCountriesPerPage,
      paginate,
      toggle,
      setToggle,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContextProvider = () => useContext(StateContext);

