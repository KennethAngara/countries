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
    <div className="flex justify-around flex-wrap sm:px-16 px-6 py-4">
      {area > 0 ? 
          region === "" ? 
            sortedCountries?.filter((country: CountryType) => country.area && country.region.includes(region) && country.area >= area).slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => /*area > 0 && region === "" */
              <CountryItem key={i} name={country.name} area={country.area} region={country.region}/>)
            : sortedCountries?.filter((country: CountryType) => country.area && country.region === region).slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => /*area > 0 && region !== "" */
              <CountryItem key={i} name={country.name} area={country.area} region={country.region}/>) 
          : region === "" ?
            sortedCountries?.slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => /*area <= 0 && region === "" */
                <CountryItem key={i} name={country.name} area={country.area} region={country.region}/>) 
            : sortedCountries?.filter((country: CountryType) => country.region === region).slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => /*area <= 0 && region !== "" */
                <CountryItem key={i} name={country.name} area={country.area} region={country.region}/>
        )}
    </div>
  )
}

export default CountryList