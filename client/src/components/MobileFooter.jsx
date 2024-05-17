import { Link } from 'react-router-dom'; 
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../Footer.css'; 

const MobileFooter = () => {   
    return (
        <footer className="mobile-footer">
            <div className="mobile-footer__wrapper">
                <div>
                    <p>NEWSLETTER SIGNUP</p>
                    <div className="email-wrapper">
                        <p>Sign up for email updates and promotions</p>
                        <input
                            type="email"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="radio-wrapper">
                        <label>
                            <input type="radio" name="subscription" value="menswear" defaultChecked />
                            Menswear
                        </label>
                        <label>
                            <input type="radio" name="subscription" value="womenswear" />
                            Womenswear
                        </label>
                    </div>
                    <button className="subscribe-btn">SUBSCRIBE</button>
                </div>
                <div className="mobile-footer__social-links">
                    <Link to=""><FaFacebookF size={10}/></Link>
                    <Link to=""><FaTwitter size={12}/></Link>
                    <Link to=""><FaInstagram size={12}/></Link>
                    <Link to=""><FaYoutube size={14}/></Link>
                </div>
                <div className="mobile-footer__country">
                    <Link to="">COUNTRY/REGION: Canada</Link>
                </div>
                <div className="mobile-footer__wrapper--grey">
                    <Link to="">Terms & Conditions</Link>
                    <Link to="">Privacy Policy</Link>
                    <Link to="">Cookies</Link>
                    <Link to="">Accessibility</Link>
                    <p>© 2024 ssense.com</p>
                </div>
            </div>
        </footer>
    );
};
  
export default MobileFooter;