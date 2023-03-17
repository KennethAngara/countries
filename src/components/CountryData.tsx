import { CountryType } from '../types/CountryType'
type countryCountType = {
  countryCount: number
}

type CountryDataType = CountryType & countryCountType


const CountryData = ({name, area, region, countryCount}: CountryDataType) => {
  return (
    <div className='countryDataContainer'>
      <p>{countryCount} {name}</p>
      <p>Area: {area ? area + " km²" : "Unspecified area"}</p>
      <p>Region: {region}</p>      
    </div>
  )
}

export default CountryData