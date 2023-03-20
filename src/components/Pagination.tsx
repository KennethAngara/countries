import { PaginationProps } from '../types/PaginationProps';
import { useState } from 'react'

const Pagination = ({ countriesPerPage, totalCountries, paginate }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const [active, setActive] = useState(1);
  const handleClick = (i: number) => {
    paginate(i+1)
    setActive(i+1)
  }

  return (
    <nav>
      <ul className=' list-none flex flex-wrap space-x-6 justify-center text-white pb-7'>
        {pageNumbers.map((number, i) => (
          <li key={number}>
            <a className={`rounded-full ${active === i+1 ? "bg-purple-700" : "bg-blue-500"} px-3 py-1 block mb-5`} onClick={() => handleClick(i)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;