import ProductCard from '../ProductCard/ProductCard';
import Pagination from './Pagination';
import './ProductList.css';

const ProductList = ({ products, currentPage, itemsPerPage, paginate }) => {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div>
            <div className="plp-product-card__wrapper">
                {currentProducts.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <div className="plp-pagination__wrapper">
                <Pagination itemsPerPage={itemsPerPage} totalItems={products.length} currentPage={currentPage} paginate={paginate} />
            </div>        
        </div>
    );
};

export default ProductList;
