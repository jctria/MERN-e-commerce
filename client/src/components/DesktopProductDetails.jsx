import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { FaChevronDown, FaCheck } from 'react-icons/fa';
import DesktopNavbar from './DesktopNavbar';
import FullscreenCarousel from './FullscreenCarousel';
import HorizontalCarousels from './HorizontalCarousels';
import DesktopFooter from './DesktopFooter';
import LiveChat from './LiveChat';

const DesktopProductDetails = ({ product, products, sizeDropdownOpen, selectedSize, toggleSizeDropdown, handleSizeSelect, handleImageClick, isFullscreen, selectedImageIndex, handleFullscreenExit, recentlyViewed }) => {
    return (
        <div className="pd-desktop">
            <DesktopNavbar />
            <FullscreenCarousel
                isOpen={isFullscreen}
                images={product ? product.imageUrl.slice(1) : []}
                selectedIndex={selectedImageIndex}
                closeCarousel={handleFullscreenExit}
            />
            <div className="pdp-page__wrapper">
                <div className="pdp-left-column__wrapper">
                    {product ? (
                        <div>
                            <p>
                                <Link to="" className="brand-name">{product.brand}</Link>
                                <br />
                                {product.name}
                                <br />
                                <br />
                                {product.description}
                                <br />
                                <br />
                                Color: {product.color}
                            </p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <div className="pdp-center-column__wrapper">
                    {product && product.imageUrl.slice(1).map((url, index) => (
                        <div className="image-wrapper">
                            <img key={index} src={url} alt={`Product Image ${index}`} onClick={() => handleImageClick(index)} />
                        </div>
                    ))}
                </div>

                <div className="pdp-right-column__wrapper">
                    {product ? (
                        <div>
                            <p>${product.price} CAD</p>
                            <Dropdown isOpen={sizeDropdownOpen} toggle={toggleSizeDropdown}>
                                <DropdownToggle className="pdp__size-btn">
                                    {selectedSize} <FaChevronDown />
                                </DropdownToggle>
                                <DropdownMenu className="pdp__size-menu">
                                    <DropdownItem
                                        className="pdp__size-menu-item select"
                                        onClick={() => handleSizeSelect('SELECT A SIZE')}
                                    >
                                        <span className="checkmark-wrapper">
                                            {selectedSize === 'SELECT A SIZE' ? <FaCheck /> : <span style={{ opacity: 0 }}><FaCheck /></span>}
                                        </span>
                                        SELECT A SIZE
                                    </DropdownItem>
                                    {product.sizes.map((size, index) => (
                                        <DropdownItem
                                            className="pdp__size-menu-item"
                                            key={index}
                                            onClick={() => handleSizeSelect(size)}
                                        >
                                            <span className="checkmark-wrapper">
                                                {selectedSize === size ? <FaCheck /> : <span style={{ opacity: 0 }}><FaCheck /></span>}
                                            </span>
                                            {size}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                            <div className="pdp-right-column__btn-wrapper">
                                <Button className="bag-btn">ADD TO BAG</Button>
                                <Button className="wishlist-btn">ADD TO WISHLIST</Button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <HorizontalCarousels title="YOU MAY ALSO LIKE" products={products} currentProductId={product ? product._id : null} />
            <HorizontalCarousels title={product ? product.brand : ''} products={products} filterBrand={product ? product.brand : ''} />
            <HorizontalCarousels title="RECENTLY VIEWED" products={recentlyViewed} />
            <DesktopFooter />
            <LiveChat />
        </div>
    );
};

export default DesktopProductDetails;