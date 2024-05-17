import { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaBars, FaSearch, FaUser, FaShoppingBag, FaChevronRight } from 'react-icons/fa';
import '../Navbar.css'

const MobileNavbar = () => {
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('MENSWEAR'); 
    const [searchInput, setSearchInput] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleSearchDropdown = () => {
        setSearchDropdownOpen(!searchDropdownOpen);
        if (!searchDropdownOpen) {
            setSelectedCategory('MENSWEAR');
            setSearchInput('');
        }
    };    

    const handleSearchLinkClick = (e, category) => {
        e.stopPropagation(); 
        setSelectedCategory(category); 
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <Navbar className="mobile-navbar">
            <Nav navbar>
                <NavItem>
                    <FaBars onClick={toggleMenu} size={18}/>
                </NavItem>
                    <div className={`fullscreen-menu ${isMenuOpen ? 'open' : 'closed'}`}>
                        <button className="close-menu-btn" onClick={toggleMenu}>
                            CLOSE
                        </button>
                        <Nav className="nav-link__wrapper" vertical>
                            <NavItem>MENSWEAR <FaChevronRight /></NavItem>
                            <NavItem>WOMENSWEAR <FaChevronRight /></NavItem>
                            <NavItem className="nav-link__divider">EVERYTHING ELSE <FaChevronRight /></NavItem>
                            <NavItem>Shopping Bag (00)</NavItem>
                            <NavItem>Wishlist</NavItem>
                            <NavItem className="nav-link__divider">Account - Login</NavItem>
                            <NavItem>Language <FaChevronRight /></NavItem>
                            <NavItem className="nav-link__divider">Canada / CAD <FaChevronRight /></NavItem>
                            <NavItem>Customer Care <FaChevronRight /></NavItem>
                            <NavItem>Live Assistance</NavItem>
                            <NavItem>Locations <FaChevronRight /></NavItem>
                        </Nav>
                    </div>

                <Dropdown nav isOpen={searchDropdownOpen} toggle={toggleSearchDropdown}>
                    <DropdownToggle nav>
                        <FaSearch size={18}/>
                    </DropdownToggle>
                    <DropdownMenu className="mobile-search-dropdown-menu">
                        <span className="search-link-wrapper">
                            <DropdownItem className={`search-dropdown-item ${selectedCategory === 'MENSWEAR' ? 'selected' : ''}`}>
                                <NavLink to="" onClick={(e) => handleSearchLinkClick(e, 'MENSWEAR')}>MENSWEAR</NavLink>
                            </DropdownItem>
                            <DropdownItem className={`search-dropdown-item ${selectedCategory === 'WOMENSWEAR' ? 'selected' : ''}`}>
                                <NavLink to="" onClick={(e) => handleSearchLinkClick(e, 'WOMENSWEAR')}>WOMENSWEAR</NavLink>
                            </DropdownItem>
                            <DropdownItem className={`search-dropdown-item ${selectedCategory === 'EVERYTHING ELSE' ? 'selected' : ''}`}>
                                <NavLink to="" onClick={(e) => handleSearchLinkClick(e, 'EVERYTHING ELSE')}>EVERYTHING ELSE</NavLink>
                            </DropdownItem>
                        </span>
                        <DropdownItem className="mobile-search-dropdown-item">
                            <div className="search-input-wrapper">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder={`SEARCH ${selectedCategory}`} 
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <span className="search-icon">
                                    <FaSearch size={18}/>
                                </span>
                                <button className="close-search-btn" onClick={toggleSearchDropdown}>
                                    CLOSE
                                </button>
                            </div>                        
                        </DropdownItem>
                        <DropdownItem className="mobile-search-dropdown-item">
                                <input type="checkbox" onClick={(e) => e.stopPropagation()}/>
                                <label>SALE ONLY</label>
                        </DropdownItem>
                        {searchInput.length > 0 && (
                            <DropdownItem className="mobile-search-dropdown-item with-border-top">
                                <p className="search-submit">Search for: "{searchInput}"</p>
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </Nav>
            <NavbarBrand href="/">SSENSE</NavbarBrand>
            <Nav navbar>
                <NavItem>
                    <NavLink><FaUser size={18}/></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><FaShoppingBag size={18}/></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default MobileNavbar;
