import { PaginationProps } from '../types/PaginationProps';

const Pagination = ({ countriesPerPage, totalCountries, paginate }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className=' list-none flex space-x-4'>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;