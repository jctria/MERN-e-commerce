import { Card, CardImg, CardBody, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const HorizontalCarousels = ({ title, products, currentProductId, filterBrand }) => {
    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
        }, 300);
    };

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
                    <Card key={product._id} className="pdp-product-card">
                        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                            <CardBody>
                                <div className="pdp-product-card__image">
                                    <CardImg src={product.imageUrl[0]} alt={product.name} />
                                </div>
                                <div className="pdp-product-card__description">
                                    <CardSubtitle className="brand-name">{product.brand}</CardSubtitle>
                                    <CardSubtitle>{product.name}</CardSubtitle>
                                    <CardSubtitle>${product.price}</CardSubtitle>
                                </div>
                            </CardBody>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HorizontalCarousels;
