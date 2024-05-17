import { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../Navbar.css'
import { FaSearch } from 'react-icons/fa';

const DesktopNavbar = () => {
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('MENSWEAR'); 
    const [searchInput, setSearchInput] = useState('');

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

    const toggleLanguageDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen);

    return (
        <Navbar className="desktop-navbar" expand="md">
            <Nav navbar>
                <NavItem>
                    <NavLink to="">MENSWEAR</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="">WOMENSWEAR</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="">EVERYTHING ELSE</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="">SALE</NavLink>
                </NavItem>
                <Dropdown nav isOpen={searchDropdownOpen} toggle={toggleSearchDropdown}>
                    <DropdownToggle nav>
                        SEARCH
                    </DropdownToggle>
                    <DropdownMenu className="search-dropdown-menu">
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
                        <DropdownItem className="search-dropdown-item">
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
                        <DropdownItem className="search-dropdown-item">
                                <input type="checkbox" onClick={(e) => e.stopPropagation()}/>
                                <label>SALE ONLY</label>
                        </DropdownItem>
                        {searchInput.length > 0 && (
                            <DropdownItem className="search-dropdown-item with-border-top">
                                <p className="search-submit">Search for: "{searchInput}"</p>
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </Nav>

            <NavbarBrand href="/">SSENSE</NavbarBrand>
            
            <Nav navbar>
                <Dropdown nav isOpen={languageDropdownOpen} toggle={toggleLanguageDropdown} onMouseEnter={toggleLanguageDropdown} onMouseLeave={toggleLanguageDropdown}>
                    <DropdownToggle nav>
                        ENGLISH
                    </DropdownToggle>
                    <DropdownMenu className="language-dropdown-menu">
                        <DropdownItem className="language-dropdown-item">FRANÇAIS</DropdownItem>
                        <DropdownItem className="language-dropdown-item">日本語</DropdownItem>
                        <DropdownItem className="language-dropdown-item">中文</DropdownItem>
                        <DropdownItem className="language-dropdown-item">한국어</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink to="">LOGIN</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="">WISHLIST</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="">SHOPPING BAG (0)</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};
  
export default DesktopNavbar;
