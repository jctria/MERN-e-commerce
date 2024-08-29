import { Link } from 'react-router-dom';
import './Sidebar.css';

const LeftSidebar = ({ brands }) => {
    return (
        <div>
            <div className="plp-left-column__category-wrapper">
                <ul className="plp__links">
                    <li className="plp__links--divider"><Link to="">ALL CATEGORIES</Link></li>
                    <li><Link to="">ACCESSORIES</Link></li>
                    <li><Link to="">BAGS</Link></li>
                    <li><Link to="">CLOTHING</Link></li>
                    <li><Link to="">SHOES</Link></li>
                </ul>
            </div>
            <div className="plp-left-column__brand-wrapper">
                <ul className="plp__links">
                    <li className="plp__links--divider"><Link to="">ALL DESIGNERS</Link></li>
                    {brands.map(brand => (
                        <li key={brand}><Link to="">{brand}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;