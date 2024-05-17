import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;