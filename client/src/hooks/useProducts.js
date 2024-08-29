import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
                
                // Extract and sort brands
                const extractedBrands = response.data.map(product => product.brand);
                const uniqueBrands = [...new Set(extractedBrands)].sort(); // Remove duplicates and sort
                setBrands(uniqueBrands);
                
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, brands, loading, error };
};

export default useProducts;
