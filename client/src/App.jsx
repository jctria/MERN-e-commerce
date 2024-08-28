import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/shopping-bag" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;