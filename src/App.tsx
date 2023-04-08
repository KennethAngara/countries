import { useEffect } from 'react'
import { CountryList, Navbar } from './components'
import Pagination from './components/Pagination'
import { countriesAPI } from './constants/countriesAPI'
import { itemsPerPage } from './constants/filterData'
import { useStateContextProvider } from './context/StateContext'
import { CountryType } from './types/CountryType'

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
    countries?.filter((country: CountryType) => country.name.includes(searchQuery) ||  country.name.toLowerCase().includes(searchQuery) ||  country.name.toUpperCase().includes(searchQuery))
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
      : totalCountries = sortedCountries?.filter((country: CountryType) => country.area && country.region === region && country.area >= area)
    : region === "" ?
      totalCountries = sortedCountries
      : totalCountries = sortedCountries?.filter((country: CountryType) => country.region === region)
    
    {!countries && alert("If you see this message, the API is probably overloaded and may not be functioning right now and. I'm using a locally exported json with the same data to create the same functionality. Please check the console for more details.")
    }


  return (
      <div className="mx-auto w-full xl:max-w-[1280px] relative font-poppins">
        <Navbar/>

        {sortedCountries.length !== 0 ? 
          <h1 className='text-center text-2xl sm:text-4xl font-bold px-6 py-8'>Showing {totalCountries.length} results</h1> 
          : <h1 className='text-center text-2xl sm:text-4xl font-bold px-6 py-8'>No countries matched your query</h1>
        }

        <CountryList sortedCountries={totalCountries} indexOfLastCountry={indexOfLastCountry} indexOfFirstCountry={indexOfFirstCountry}/>

        <Pagination countriesPerPage={countriesPerPage} totalCountries={totalCountries.length} paginate={paginate}/>
      </div>
  )
}

export default App
