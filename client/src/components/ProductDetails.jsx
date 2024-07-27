import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MobileProductDetails from './MobileProductDetails';
import DesktopProductDetails from './DesktopProductDetails';
import shuffleArray from '../utils/shuffleArray';
import '../ProductDetails.css'; 

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);  
    const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState('SELECT A SIZE');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [recentlyViewed, setRecentlyViewed] = useState(() => JSON.parse(localStorage.getItem('recentlyViewed')) || []);

    const toggleSizeDropdown = () => setSizeDropdownOpen(!sizeDropdownOpen);
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        setSizeDropdownOpen(false); 
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setIsFullscreen(true);
    };
    const handleFullscreenExit = () => {
        setIsFullscreen(false);
    };

    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                const shuffledProducts = shuffleArray([...response.data]); 
                setProducts(shuffledProducts);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [id]);

    useEffect(() => {
        if (product) {
            const updatedRecentlyViewed = [product, ...recentlyViewed.filter(p => p._id !== product._id)].slice(0, 20);
            setRecentlyViewed(updatedRecentlyViewed);
            localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecentlyViewed));
        }
    }, [product]);

    const isMobile = window.innerWidth <= 767;

    return (
        <>
            {isMobile ? (
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
            ) : (
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
            )}
        </>
    );
};

export default ProductDetails;

