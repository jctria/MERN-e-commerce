import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardSubtitle } from 'reactstrap';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
    return (
        <Card key={product._id} className="product-card">
            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }} onClick={onClick}>
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
    );
};

export default ProductCard;
