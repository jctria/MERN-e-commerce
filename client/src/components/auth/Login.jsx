import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopNavbar from '../DesktopNavbar'
import MobileNavbar from '../MobileNavbar'
import DesktopFooter from '../DesktopFooter';
import MobileFooter from '../MobileFooter';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return(
        <div>
            <div className="mobile-navbar">
                <MobileNavbar/>
            </div>
            <div className="desktop-navbar">
                <DesktopNavbar/>
            </div> 

            <div className="login-body__wrapper">
                <div className="login-form">
                    <p>LOGIN</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>

                        <button className="login-btn" type="submit">CONTINUE</button>
                    </form>
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

export default Login;