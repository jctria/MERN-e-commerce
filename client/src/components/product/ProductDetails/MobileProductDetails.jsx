import { Button } from 'reactstrap';
import { FaRegHeart } from 'react-icons/fa';
import MobileCarousel from '../ProductComponents//MobileCarousel';
import FullscreenCarousel from '../ProductComponents/FullscreenCarousel';
import SizeDropdown from '../ProductComponents//SizeDropdown';
import CardCarousel from '../ProductComponents/CardCarousel';
import Layout from '../../layout/Layout';

const MobileProductDetails = ({ product, products, sizeDropdownOpen, selectedSize, toggleSizeDropdown, handleSizeSelect, handleImageClick, isFullscreen, selectedImageIndex, handleFullscreenExit, recentlyViewed }) => {
    return (
        <Layout>
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
                                <SizeDropdown
                                    isOpen={sizeDropdownOpen}
                                    toggle={toggleSizeDropdown}
                                    selectedSize={selectedSize}
                                    sizes={product.sizes}
                                    onSizeSelect={handleSizeSelect}
                                />
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

            <CardCarousel title="YOU MAY ALSO LIKE" products={products} currentProductId={product ? product._id : null} />
            <CardCarousel title={product ? product.brand : ''} products={products} filterBrand={product ? product.brand : ''} />
            <CardCarousel title="RECENTLY VIEWED" products={recentlyViewed} />
        </Layout>
    );
};

export default MobileProductDetails;