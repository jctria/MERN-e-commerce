import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const FilterBar = () => {
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

    const toggleSortMenu = () => setIsSortMenuOpen(!isSortMenuOpen);

    return (
        <>
            <div className="filter-bar">
                <button className="refine-btn">REFINE</button>
                <button className="sort-btn" onClick={toggleSortMenu}>SORT</button>
            </div>
            <div className={`sort-menu ${isSortMenuOpen ? 'open' : 'closed'}`}>
                <h2 className="menu-title">SORT</h2>
                <button className="close-sort-menu" onClick={toggleSortMenu}>CANCEL</button>
                <ul className="sort-link__wrapper">
                    <li><Link to="">Latest Arrivals</Link></li>
                    <li><Link to="">Trending</Link></li>
                    <li><Link to="">Price: Low to high</Link></li>
                    <li><Link to="">Price: High to low</Link></li>
                </ul>
            </div>
        </>
    );
};

export default FilterBar;
