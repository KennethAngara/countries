import { areaFilter, regionFilter } from "../constants/filterData"
import { AreaFilterProps } from "../types/FilterProps"

const Filters = ({searchQuery, setSearchQuery, area, setArea, region, setRegion, alphabetical, setAlphabetical}: AreaFilterProps) => {
  return (
    <div>
      <button onClick={() => setAlphabetical(prev => !prev)}>{alphabetical ? "Sorting asc" : "Sorting desc"}</button>

      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

      <select value={area} onChange={(e) => setArea(parseFloat(e.target.value))}>
        {areaFilter.map(area => <option key={area.value} value={area.value}>{area.text}</option>)}
      </select>
        
      <select name="region" id="region" value={region} onChange={(e) => setRegion(e.target.value)}>
        {regionFilter.map(region => <option key={region.value} value={region.value}>{region.text}</option>)}
      </select>
    </div>
  )
}

export default Filters