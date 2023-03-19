import { CountryType } from '../types/CountryType'
type countryCountType = {
  countryCount: number
}

type CountryItemType = CountryType & countryCountType


const CountryItem = ({name, area, region, countryCount}: CountryItemType) => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
      <p>{countryCount} {name}</p>
      <p>Area: {area ? area + " km²" : "Unspecified area"}</p>
      <p>Region: {region}</p>      
    </div>
  )
}

export default CountryItem