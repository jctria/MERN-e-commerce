import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../hooks/useProductDetails';
import MobileProductDetails from '../components/product/ProductDetails/MobileProductDetails';
import DesktopProductDetails from '../components/product/ProductDetails/DesktopProductDetails';
import '../components/product/ProductDetails/ProductDetails.css'; 

const ProductDetailPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const { id } = useParams();
    const {
        product,
        products,
        sizeDropdownOpen,
        selectedSize,
        isFullscreen,
        selectedImageIndex,
        recentlyViewed,
        toggleSizeDropdown,
        handleSizeSelect,
        handleImageClick,
        handleFullscreenExit,
    } = useProductDetails(id);

    // Effect to handle window resize and update the view accordingly (for development purposes)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <div className="pd-mobile">
                    <MobileProductDetails
                        product={product}
                        products={products} 
                        sizeDropdownOpen={sizeDropdownOpen}
                        selectedSize={selectedSize}
                        toggleSizeDropdown={toggleSizeDropdown}
                        handleSizeSelect={handleSizeSelect}
                        handleImageClick={handleImageClick}
                        isFullscreen={isFullscreen}
                        selectedImageIndex={selectedImageIndex}
                        handleFullscreenExit={handleFullscreenExit}
                        recentlyViewed={recentlyViewed}                
                    />
                </div>
            ) : (
                <div className="pd-desktop">
                    <DesktopProductDetails
                        product={product}
                        products={products} 
                        sizeDropdownOpen={sizeDropdownOpen}
                        selectedSize={selectedSize}
                        toggleSizeDropdown={toggleSizeDropdown}
                        handleSizeSelect={handleSizeSelect}
                        handleImageClick={handleImageClick}
                        isFullscreen={isFullscreen}
                        selectedImageIndex={selectedImageIndex}
                        handleFullscreenExit={handleFullscreenExit}
                        recentlyViewed={recentlyViewed}                
                    />
                </div>
            )}
        </>
    );
};

export default ProductDetailPage;
