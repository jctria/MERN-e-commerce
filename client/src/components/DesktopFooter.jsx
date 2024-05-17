import { Link } from 'react-router-dom'; 
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../Footer.css'; 

const DesktopFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <Link to="">COUNTRY/REGION: CANADA</Link>
                <Link to="">NEWSLETTER SIGNUP</Link>
                <Link to="">CUSTOMER CARE</Link>
                <Link to="">LOCATION</Link> 
                <Link to="">EDITORIAL ARCHIVE</Link>
                <Link to="">CAREERS</Link>
                <Link to="">AFFILIATES</Link>
                <Link to="">SITEMAP</Link>
            </div>
            <div className="footer__wrapper footer__wrapper--grey">
                <p>© 2024 ssense.com</p>
                <Link to="">Terms & Conditions</Link>
                <Link to="">Privacy Policy</Link>
                <Link to="">Cookies</Link>
                <Link to="">Accessibility</Link>
                <div className="footer__social-links">
                    <Link to=""><FaFacebookF size={10}/></Link>
                    <Link to=""><FaTwitter size={12}/></Link>
                    <Link to=""><FaInstagram size={12}/></Link>
                    <Link to=""><FaYoutube size={14}/></Link>
                </div>
            </div>
        </footer>
    );
};

export default DesktopFooter;