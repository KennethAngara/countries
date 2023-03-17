import { useEffect } from 'react'
import './App.css'
import { CountryData, Filters } from './components'
import { countriesAPI } from './constants/countriesAPI'
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

  return (
      <div className="App">
        {!countries && <div>The <a href="https://restcountries.com/v2/all?fields=name,region,area" target={'_blank'}>API</a> May not be functioning right now and I'm using a locally exported json. Please check the console for more details.</div>}

        <Filters/>

        {area > 0 ? 
          region === "" ? 
            sortedCountries?.filter((country: CountryType) => country.area && country.region.includes(region) && country.area >= area).map((country: CountryType, i) => /*area > 0 && region === "" */
              <CountryData key={i} countryCount={i + 1} name={country.name} area={country.area} region={country.region}/>)
            : sortedCountries?.filter((country: CountryType) => country.area && country.region === region).map((country: CountryType, i) => /*area > 0 && region !== "" */
              <CountryData key={i} countryCount={i + 1} name={country.name} area={country.area} region={country.region}/>) 

          : region === "" ?
            sortedCountries?.map((country: CountryType, i) => /*area <= 0 && region === "" */
              <CountryData key={i} countryCount={i + 1} name={country.name} area={country.area} region={country.region}/>) 
            : sortedCountries?.filter((country: CountryType) => country.region === region).map((country: CountryType, i) => /*area <= 0 && region !== "" */
              <CountryData key={i} countryCount={i + 1} name={country.name} area={country.area} region={country.region}/>
        )}
        {sortedCountries.length === 0 && <p>No countries matched your query</p>}
      </div>
  )
}

export default App
