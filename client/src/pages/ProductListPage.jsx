import { useState } from 'react';
import Layout from '../components/layout/Layout';
import LeftSidebar from '../components/layout/Sidebar/LeftSidebar';
import ProductList from '../components/product/ProductList/ProductList'; 
import RightSidebar from '../components/layout/Sidebar/RightSidebar';
import FilterBar from '../components/layout/Sidebar/FilterBar'; 
import useProducts from '../hooks/useProducts'; 
import scrollToTop from '../utils/scrollToTop'; 

const ProductListPage = () => {
    const { products, brands, loading, error } = useProducts(); 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(40); 

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        scrollToTop(); 
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products.</p>;
  
    return (
        <Layout>
            <FilterBar />
            <div className="plp-page__wrapper">
                <div className="plp-left-column__wrapper">
                    <LeftSidebar brands={brands} />
                </div>
                <div className="plp-products-column__wrapper">
                    <ProductList
                        products={products}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        paginate={paginate}
                    />
                </div>
                <div className="plp-right-column__wrapper">
                    <RightSidebar />
                </div>
            </div>
        </Layout>
    );
};

export default ProductListPage;