export type StateType = {
    countries : never[]
    setCountries : React.Dispatch<React.SetStateAction<never[]>>
    loading : boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    searchQuery : string
    setSearchQuery : React.Dispatch<React.SetStateAction<string>>
    area: number
    setArea: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    countriesPerPage: number
    setCountriesPerPage: React.Dispatch<React.SetStateAction<number>>
    region: string
    setRegion: React.Dispatch<React.SetStateAction<string>>
    alphabetical: boolean
    setAlphabetical: React.Dispatch<React.SetStateAction<boolean>>
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    paginate: (pageNumber: any) => void
}