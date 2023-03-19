import { useEffect } from 'react'
import { Filters, CountryList } from './components'
import Pagination from './components/Pagination'
import { countriesAPI } from './constants/countriesAPI'
import { useStateContextProvider } from './context/StateContext'
import { CountryType } from './types/CountryType'
import './index.css'
import DarkMode from './components/DarkMode'

function App() {
  const localCountries = countriesAPI

  const {
    countries,
    setCountries,
    setLoading,
    searchQuery,
    area,
    region,
    alphabetical,
    currentPage,
    countriesPerPage,
    paginate
  } = useStateContextProvider()

  useEffect(() => {
    setLoading(true)
    fetchCountries();
    setLoading(false)
  }, []);

  const fetchCountries = async() => {
    try {
      const response = await fetch("https://restcountries.com/v2/all?fields=name,region,area")
      const data = await response.json()
      setCountries(data)
    } catch (error) {
      console.log("An error has occured")
    }
  }
  

  const searchedCountries = countries?.length !== 0 ?
    countries?.filter((country: CountryType) => country.name.includes(searchQuery) ||  country.name.toLowerCase().includes(searchQuery))
    : localCountries?.filter((country: CountryType) => country.name.includes(searchQuery) || country.name.toLowerCase().includes(searchQuery))
  
  const sortedCountries = alphabetical ?
  searchedCountries?.sort((a: CountryType, b: CountryType) => a.name > b.name? 1 : -1)
  : searchedCountries?.sort((a: CountryType, b: CountryType) => a.name > b.name? -1 : 1)

  let totalCountries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  area > 0 ? 
    region === "" ? 
      totalCountries = sortedCountries?.filter((country: CountryType) => country.area && country.region.includes(region) && country.area >= area)
      : totalCountries = sortedCountries?.filter((country: CountryType) => country.area && country.region === region)
    : region === "" ?
      totalCountries = sortedCountries
      : totalCountries = sortedCountries?.filter((country: CountryType) => country.region === region)


  return (
      <div className=" font-poppins">
        <DarkMode/>

        {!countries && 
          <p>
            If you see this message, the <a href="https://restcountries.com/v2/all?fields=name,region,area" target={'_blank'}>API</a> is probably overloaded and may not be functioning right now and. I'm using a locally exported json with the same data to create the same functionality. Please check the console for more details.
          </p>
        }
        <p>{totalCountries.length}</p>

        <Filters/>

        <CountryList sortedCountries={sortedCountries} indexOfLastCountry={indexOfLastCountry} indexOfFirstCountry={indexOfFirstCountry}/>

        <Pagination countriesPerPage={countriesPerPage} totalCountries={totalCountries.length} paginate={paginate}/>

        {sortedCountries.length === 0 && <p className=' text-white bg-black'>No countries matched your query</p>}
      </div>
  )
}

export default App
