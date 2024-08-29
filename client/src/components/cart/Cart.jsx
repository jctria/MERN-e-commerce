import { Button } from 'reactstrap';
import Layout from '../layout/Layout'; 
import './Cart.css'

const Cart = () => {
    return(
        <Layout>
            <div className="body-wrapper">
                <div className="cart-page__wrapper">
                    <div className="cart-header__wrapper">
                        SHOPPING BAG
                    </div>
                    <div className="cart-products__wrapper">
                        <div>
                            Your shopping bag is empty.
                        </div>
                        <div className="btn-wrapper">
                            <Button className="shop-btn">SHOP MENSWEAR</Button>
                            <Button className="shop-btn">SHOP WOMENSWEAR</Button>
                            <Button className="shop-btn">SHOP EVERYTHING ELSE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Cart;
