import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { FaChevronDown, FaCheck, FaRegHeart } from 'react-icons/fa';
import MobileNavbar from './MobileNavbar';
import MobileCarousel from './MobileCarousel';
import FullscreenCarousel from './FullscreenCarousel';
import HorizontalCarousels from './HorizontalCarousels';
import MobileFooter from './MobileFooter';

const MobileProductDetails = ({ product, products, sizeDropdownOpen, selectedSize, toggleSizeDropdown, handleSizeSelect, handleImageClick, isFullscreen, selectedImageIndex, handleFullscreenExit, recentlyViewed }) => {
    return (
        <div className="pd-mobile">
            <MobileNavbar />
            <FullscreenCarousel
                isOpen={isFullscreen}
                images={product ? product.imageUrl.slice(1) : []}
                selectedIndex={selectedImageIndex}
                closeCarousel={handleFullscreenExit}
            />
            <div className="pdp-mobile-page__wrapper">
                <div className="pdp-mobile-carousel__wrapper">
                    {product ? (
                        <MobileCarousel images={product.imageUrl.slice(1)} onImageClick={handleImageClick} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="pdp-mobile-info__wrapper">
                    {product ? (
                        <div>
                            <p className="brand-name-price__wrapper">
                                <div>
                                    <span className="brand-name">{product.brand}</span>
                                    <br />
                                    <span className="product-name">{product.name}</span>
                                </div>
                                <span className="price">${product.price} CAD</span>
                            </p>

                            <div>
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
                                <div className="pdp-mobile-info__btn-wrapper">
                                    <Button className="bag-btn">ADD TO BAG</Button>
                                    <Button className="wishlist-btn"><FaRegHeart /></Button>
                                </div>
                            </div>

                            <p>
                                ITEM INFO
                                <br />
                                {product.description}
                                <br />
                                <br />
                                Color: {product.color}
                            </p>
                        </div>
                    ) : null}
                </div>
            </div>

            <HorizontalCarousels title="YOU MAY ALSO LIKE" products={products} currentProductId={product ? product._id : null} />
            <HorizontalCarousels title={product ? product.brand : ''} products={products} filterBrand={product ? product.brand : ''} />
            <HorizontalCarousels title="RECENTLY VIEWED" products={recentlyViewed} />
            <MobileFooter />
        </div>
    );
};

export default MobileProductDetails;