import { CountryType } from '../types/CountryType'

//17124442
const CountryItem = ({name, area, region}: CountryType) => {
  const lw = `${area && 100*(area/17124442)}`
  const parsedWidth = parseInt(lw) 
  return (
    <div className='flex flex-col space-y-3 w-full sm:max-w-[calc(50%-75px)] mb-7'>
      <p>{name}</p>
      <p>Area: {area ? area + " km²" : "Unspecified area"}</p>
      <p>Region: {region}</p>
      <div className="relative w-full h-3 bg-slate-100">
        <div className={`absolute h-full top-0 left-0  bg-black w-[${parsedWidth}%]`}></div>
      </div>
    </div>
  )
}

export default CountryItem