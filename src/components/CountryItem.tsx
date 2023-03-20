import { CountryType } from '../types/CountryType'

//17124442
const CountryItem = ({name, area, region}: CountryType) => {
  return (
    <div className='flex flex-col space-y-3 w-full sm:max-w-[calc(50%-50px)] mb-10 text-black p-4 sm:p-8 text-lg rounded-3xl bg-slate-300 dark:bg-slate-500'>
      <p>
        <span className='font-semibold'>Country name:</span>
        <span className='text-[#434343] dark:text-dimWhite'> {name}</span>
      </p>
      <p>
        <span className='font-semibold'>Area size:</span>
        <span className='text-[#2b2b2b] dark:text-dimWhite'> {area ? area + " km²" : "Unspecified size"}</span> 
      </p>
      <p>
        <span className='font-semibold'>Region:</span>
        <span className='text-[#2b2b2b] dark:text-dimWhite'> {region}</span> 
      </p>
    </div>
  )
}

export default CountryItem