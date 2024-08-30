import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import scrollToTop from '../../../utils/scrollToTop'; 
import './CardCarousel.css';

const CardCarousel = ({ title, products, currentProductId, filterBrand }) => {
    let filteredProducts = products;

    if (currentProductId) {
        filteredProducts = filteredProducts.filter(product => product._id !== currentProductId);
    }

    if (filterBrand) {
        filteredProducts = filteredProducts.filter(product => product.brand === filterBrand);
    }

    const isBrandTitle = title && title.trim() !== '' && products.some(product => product.brand === title);

    return (
        <div className="pdp-products__container">
            {title && <h2 className="brand-name">{title}{isBrandTitle && <Link to="" className="shop-all-link">SHOP ALL</Link>}</h2>}
            <div className="pdp-product-card__container">
                {filteredProducts.map(product => (
                    <ProductCard key={product._id} product={product} onClick={scrollToTop} />
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;
