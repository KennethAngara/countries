export type CountryListProps = {
    sortedCountries: ({
        name: string;
        region: string;
        area: number;
        independent: boolean;
    } | {
        name: string;
        region: string;
        independent: boolean;
        area?: undefined;
    })[]
    indexOfLastCountry: number
    indexOfFirstCountry: number
}