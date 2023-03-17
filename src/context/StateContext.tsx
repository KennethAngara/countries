import { useState, createContext, useContext } from "react";
import { StateContextProviderProps } from "../types/StateContextProviderProps";
import { StateType } from "../types/StateTypes";

const StateContext = createContext({} as StateType);

export const StateContextProvider = ({children}: StateContextProviderProps) => {

  const [ countries, setCountries ] = useState<[]>([])
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ searchQuery, setSearchQuery ] = useState<string>('')
  const [area, setArea] = useState<number>(0)
  const [region, setRegion] = useState<string>('')
  const [alphabetical, setAlphabetical] = useState<boolean>(true)

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
      setAlphabetical
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContextProvider = () => useContext(StateContext);

