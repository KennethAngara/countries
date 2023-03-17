export type AreaFilterProps = {
    searchQuery: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    area: number
    setArea: React.Dispatch<React.SetStateAction<number>>
    region: string
    setRegion: React.Dispatch<React.SetStateAction<string>>
    alphabetical: boolean
    setAlphabetical: React.Dispatch<React.SetStateAction<boolean>>
}