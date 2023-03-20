import React from 'react'
import { areaFilter, regionFilter } from '../constants/filterData'
import { useStateContextProvider } from '../context/StateContext'

const Filters = () => {
  const {
    searchQuery,
    setSearchQuery,
    area,
    setArea,
    region,
    setRegion,
    alphabetical,
    setAlphabetical,
    paginate
  } = useStateContextProvider()

  const searchQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    paginate(1)
    setSearchQuery(e.target.value)
  }

  const areaHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    paginate(1)
    setArea(parseFloat(e.target.value))
  }

  const regionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    paginate(1)
    setRegion(e.target.value)
  }

  return (
    <div className="hidden sm:flex sm:space-x-5 items-center">
      <input type="text" value={searchQuery} className="outline-none h-[35px] border-2 border-slate-800 dark:border-white rounded-full pl-2 dark:bg-[#3B3B3B] dark:text-white" placeholder='Search for Countries' onChange={(e) => searchQueryHandler(e)}/>

      <select value={area} className='outline-none h-[35px] border-2 border-slate-800 dark:border-white dark:bg-[#3B3B3B] dark:text-white rounded-sm hover:cursor-pointer' onChange={(e) => areaHandler(e)}>
        {areaFilter.map(countryArea => <option key={countryArea.value} value={countryArea.value}>{countryArea.text}</option>)}
      </select>
        
      <select name="region" id="region" value={region} className="outline-none h-[35px] border-2 border-slate-800 dark:border-white rounded-sm text-center dark:bg-[#3B3B3B] dark:text-white hover:cursor-pointer" onChange={(e) => regionHandler(e)}>
        {regionFilter.map(region => <option key={region.value} value={region.value}>{region.text}</option>)}
      </select>
      
      <button className='px-4 py-1 font-medium bg-slate-800 text-white dark:bg-white dark:text-slate-900' onClick={() => setAlphabetical(prev => !prev)}>{alphabetical ? "Sorting asc" : "Sorting desc"}</button>
    </div>
  )
}

export default Filters