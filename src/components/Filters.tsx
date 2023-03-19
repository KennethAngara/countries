import { areaFilter, regionFilter } from "../constants/filterData"
import { useStateContextProvider } from "../context/StateContext"

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
    <div>
      <button onClick={() => setAlphabetical(prev => !prev)}>{alphabetical ? "Sorting asc" : "Sorting desc"}</button>

      <input type="text" value={searchQuery} onChange={(e) => searchQueryHandler(e)}/>

      <select value={area} onChange={(e) => areaHandler(e)}>
        {areaFilter.map(countryArea => <option key={countryArea.value} value={countryArea.value}>{countryArea.text}</option>)}
      </select>
        
      <select name="region" id="region" value={region} onChange={(e) => regionHandler(e)}>
        {regionFilter.map(region => <option key={region.value} value={region.value}>{region.text}</option>)}
      </select>
    </div>
  )
}

export default Filters