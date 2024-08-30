import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import FullscreenCarousel from '../ProductComponents/FullscreenCarousel';
import SizeDropdown from '../ProductComponents/SizeDropdown';
import CardCarousel from '../ProductComponents/CardCarousel';
import Layout from '../../layout/Layout';

const DesktopProductDetails = ({ product, products, sizeDropdownOpen, selectedSize, toggleSizeDropdown, handleSizeSelect, handleImageClick, isFullscreen, selectedImageIndex, handleFullscreenExit, recentlyViewed }) => {
    return (
        <Layout>
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
                            <SizeDropdown
                                isOpen={sizeDropdownOpen}
                                toggle={toggleSizeDropdown}
                                selectedSize={selectedSize}
                                sizes={product.sizes}
                                onSizeSelect={handleSizeSelect}
                            />
                            <div className="pdp-right-column__btn-wrapper">
                                <Button className="bag-btn">ADD TO BAG</Button>
                                <Button className="wishlist-btn">ADD TO WISHLIST</Button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <CardCarousel title="YOU MAY ALSO LIKE" products={products} currentProductId={product ? product._id : null} />
            <CardCarousel title={product ? product.brand : ''} products={products} filterBrand={product ? product.brand : ''} />
            <CardCarousel title="RECENTLY VIEWED" products={recentlyViewed} />
        </Layout>
    );
};

export default DesktopProductDetails;