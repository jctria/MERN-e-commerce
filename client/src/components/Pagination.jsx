import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {currentPage > 1 && (
                    <li className='page-item'>
                        <a onClick={() => paginate(currentPage - 1)} href="#" className='page-link'>
                            <FaArrowLeft /> PREVIOUS 
                        </a>
                    </li>
                )}
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={(e) => {
                            e.preventDefault();
                            paginate(number);
                        }} href="#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li className='page-item'>
                        <a onClick={() => paginate(currentPage + 1)} href="#" className='page-link'>
                            NEXT <FaArrowRight />
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;