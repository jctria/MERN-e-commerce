import { Button } from 'reactstrap';
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import '../Cart.css'

const Cart = () => {
    return(
        <div>
            <div className="mobile-navbar">
                <MobileNavbar/>
            </div>
            <div className="desktop-navbar">
                <DesktopNavbar/>
            </div>
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
            <div className="mobile-footer">
                <MobileFooter />
             </div>
            <div className="desktop-footer">
                 <DesktopFooter />
            </div>
        </div>
    )
};

export default Cart;
