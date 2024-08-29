import DesktopNavbar from './Navbar/DesktopNavbar';
import MobileNavbar from './Navbar/MobileNavbar';
import DesktopFooter from './Footer/DesktopFooter';
import MobileFooter from './Footer/MobileFooter';
import LiveChat from '../common/LiveChat';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <div className="use-desktop-navbar">
                <DesktopNavbar />
            </div>
            <div className="use-mobile-navbar">
                <MobileNavbar />
            </div>

            {children}

            <div className="use-desktop-footer">
                <DesktopFooter />
            </div>
            <div className="use-mobile-footer">
                <MobileFooter />
            </div>

            <div className="live-chat-btn">
                <LiveChat />
            </div>
        </div>
    );
};

export default Layout;