import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Wishlist from './components/wishlist/Wishlist';
import Cart from './components/cart/Cart';
import Login from './components/auth/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ProductListPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/shopping-bag" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;