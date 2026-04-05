import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ui/ProductCard';
import MyBasket from '../components/ui/MyBasket';
import './Category.css';

const Category = () => {
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  
 
  const { items: allProducts, status } = useSelector((state) => state.products);

  const searchQuery = searchParams.get('q')?.toLowerCase().trim() || '';
  const isSearchPage = categoryName === 'search';

  useEffect(() => {
    if (!allProducts.length) return; 

    if (isSearchPage) {
      const matchedProducts = allProducts.filter((product) => {
        const searchableText = `
          ${product.name}
          ${product.description}
          ${product.category}
          ${product.categoryId}
          ${product.store}
          ${product.unit}
        `.toLowerCase();

        return searchableText.includes(searchQuery);
      });

      setFilteredProducts(matchedProducts);
    } else {
      const matchedProducts = allProducts.filter(
        (product) => product.categoryId === categoryName
      );

      setFilteredProducts(matchedProducts);
    }
  }, [categoryName, searchQuery, allProducts, isSearchPage]);

  
  if (status === 'loading') {
    return (
      <section className="category-page py-4">
        <div className="container">
          <div className="text-center py-5">Loading products...</div>
        </div>
      </section>
    );
  }

  if (status === 'failed') {
    return (
      <section className="category-page py-4">
        <div className="container">
          <div className="text-center py-5 text-danger">Failed to load products. Please refresh.</div>
        </div>
      </section>
    );
  }

  const pageTitle = isSearchPage
    ? `Search Results for "${searchQuery}"`
    : filteredProducts[0]?.category || 'Category';

  const pageSubtitle = isSearchPage
    ? `${filteredProducts.length} product(s) found`
    : `${filteredProducts.length} product(s) available`;

  return (
    <section className="category-page py-4">
      <div className="container">
        <div className="row">
          {/* Left Side - Products */}
          <div className="col-md-8">
            <div className="category-header">
              <h2 className="app-section-title">{pageTitle}</h2>
              <p className="category-subtitle">{pageSubtitle}</p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="row">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-lg-3 col-md-4 col-6 mb-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-products-box">
                <h3>No products found</h3>
                <p>Try searching with another keyword.</p>
              </div>
            )}
          </div>

          {/* Right Side - Basket */}
          <div className="col-md-4">
            <MyBasket />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;