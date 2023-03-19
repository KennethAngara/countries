import { useStateContextProvider } from "../context/StateContext"
import { CountryListProps } from "../types/CountryListProps"
import { CountryType } from "../types/CountryType"
import CountryItem from "./CountryItem"

const CountryList = ({sortedCountries, indexOfFirstCountry, indexOfLastCountry }: CountryListProps) => {

  const {
    area,
    region,
  } = useStateContextProvider()
  
  return (
    <div>
      {area > 0 ? 
          region === "" ? 
            sortedCountries?.filter((country: CountryType) => country.area && country.region.includes(region) && country.area >= area).slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => /*area > 0 && region === "" */
              <CountryItem key={i} countryCount={i + 1} name={country.name} area={country.area} region={country.region}/>)
            : sortedCountries?.filter((country: CountryType) => country.area && country.region === region).slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => /*area > 0 && region !== "" */
              <CountryItem key={i} countryCount={i + 1} name={country.name} area={country.area} region={country.region}/>) 
          : region === "" ?
            sortedCountries?.slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => /*area <= 0 && region === "" */
                <CountryItem key={i} countryCount={i + 1} name={country.name} area={country.area} region={country.region}/>) 
            : sortedCountries?.filter((country: CountryType) => country.region === region).slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => /*area <= 0 && region !== "" */
                <CountryItem key={i} countryCount={i + 1} name={country.name} area={country.area} region={country.region}/>
        )}
    </div>
  )
}

export default CountryList