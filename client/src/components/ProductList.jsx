import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios'; 
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import Pagination from './Pagination';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import LiveChat from './LiveChat'; 
import '../ProductList.css'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [isColorsOpen, setIsColorsOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(40); 
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

    const toggleColors = () => setIsColorsOpen(!isColorsOpen);
    const toggleSortMenu = () => setIsSortMenuOpen(!isSortMenuOpen);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
                // Extract and sort brands
                const extractedBrands = response.data.map(product => product.brand);
                const uniqueBrands = [...new Set(extractedBrands)].sort(); // Remove duplicates and sort
                setBrands(uniqueBrands);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };
  
    return (
        <div>
            <div className="use-desktop-navbar">
                <DesktopNavbar/>
            </div>
            <div className="use-mobile-navbar">
                <MobileNavbar/>
            </div>
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

                <div className="plp-page__wrapper">

                    <div className="plp-left-column__wrapper">
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
                    
                    <div className="plp-products-column__wrapper">
                        <div className="plp-product-card__wrapper">
                            {currentProducts.map(product => (
                                <Card key={product._id} className="product-card">
                                    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                                        <CardBody>
                                            <div className="product-card__image">
                                                <CardImg src={product.imageUrl[0]} alt={product.name} />
                                            </div>
                                            <div className="product-card__description">
                                                <CardSubtitle className="brand-name">{product.brand}</CardSubtitle>
                                                <CardSubtitle>{product.name}</CardSubtitle>
                                                <CardSubtitle>${product.price}</CardSubtitle>
                                            </div>
                                        </CardBody>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                        <div className="plp-pagination__wrapper">
                                <Pagination itemsPerPage={itemsPerPage} totalItems={products.length} currentPage={currentPage} paginate={paginate} />
                        </div>
                    </div>
                    
                    <div className="plp-right-column__wrapper">
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
                                COLORS {isColorsOpen ? <FaChevronDown/> : <FaChevronUp/>}
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

                </div>
                
                <div className="use-desktop-footer">
                    <DesktopFooter />
                </div>
                <div className="use-mobile-footer">
                    <MobileFooter />
                </div>
                <div className="live-chat-btn">
                    <LiveChat /> 
                </div>
        </div>
    );
};

export default ProductList;