export type StateType = {
    countries : []
    setCountries : React.Dispatch<React.SetStateAction<[]>>
    loading : boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    searchQuery : string
    setSearchQuery : React.Dispatch<React.SetStateAction<string>>
    area: number
    setArea: React.Dispatch<React.SetStateAction<number>>
    region: string
    setRegion: React.Dispatch<React.SetStateAction<string>>
    alphabetical: boolean
    setAlphabetical: React.Dispatch<React.SetStateAction<boolean>>
}