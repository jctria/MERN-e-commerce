import { Button } from 'reactstrap';
import Layout from '../layout/Layout';
import './Wishlist.css'

const Wishlist = () => {
    return(
        <Layout>
            <div className="body-wrapper">
                <div className="wishlist-page__wrapper">
                    <div className="wishlist-header__wrapper">
                        <b>WISHLIST</b>
                        <br/>
                        Use this page to manage the items you have added to your wishlist. Items saved can be removed or added to your Shopping Bag for purchase.
                    </div>
                    <div className="wishlist-products__wrapper">
                        <div>
                            Your wishlist is empty.
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

export default Wishlist;
