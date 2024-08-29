import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Sidebar.css';

const RightSidebar = () => {
    const [isColorsOpen, setIsColorsOpen] = useState(true);

    const toggleColors = () => setIsColorsOpen(!isColorsOpen);

    return (
        <div>
            <div className="plp-right-column__sort-wrapper">
                <ul className="plp__links">
                    <p>SORT</p>
                    <li><Link to="">Latest Arrivals</Link></li>
                    <li><Link to="">Trending</Link></li>
                    <li><Link to="">Price: Low to high</Link></li>
                    <li><Link to="">Price: High to low</Link></li>
                </ul>
            </div>

            <div className="plp-right-column__color-wrapper">
                <Button onClick={toggleColors} className="plp__color-btn">
                    COLORS {isColorsOpen ? <FaChevronDown /> : <FaChevronUp />}
                </Button>
                {isColorsOpen && (
                    <ul className="plp__links">
                        <li><Link to="">ALL COLORS</Link></li>
                        <li><Link to="">Black</Link></li>
                        <li><Link to="">Blue</Link></li>
                        <li><Link to="">Brown</Link></li>
                        <li><Link to="">Burgundy</Link></li>
                        <li><Link to="">Gray</Link></li>
                        <li><Link to="">Green</Link></li>
                        <li><Link to="">Navy</Link></li>
                        <li><Link to="">Orange</Link></li>
                        <li><Link to="">Pink</Link></li>
                        <li><Link to="">Purple</Link></li>
                        <li><Link to="">Red</Link></li>
                        <li><Link to="">Tan</Link></li>
                        <li><Link to="">White</Link></li>
                        <li><Link to="">Yellow</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default RightSidebar;
