import { CountryListProps } from "../types/CountryListProps"
import { CountryType } from "../types/CountryType"
import CountryItem from "./CountryItem"

const CountryList = ({sortedCountries, indexOfFirstCountry, indexOfLastCountry }: CountryListProps) => {
  
  return (
    <div className="flex justify-around flex-wrap sm:px-16 px-6 py-4">
      {
        sortedCountries?.slice(indexOfFirstCountry, indexOfLastCountry).map((country: CountryType, i: number) => <CountryItem key={i} name={country.name} area={country.area} region={country.region}/>)
      }
    </div>
  )
}

export default CountryList