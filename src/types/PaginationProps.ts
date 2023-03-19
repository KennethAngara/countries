export type PaginationProps = {
    countriesPerPage: number
    totalCountries: number
    paginate: (pageNumber: number) => void
}