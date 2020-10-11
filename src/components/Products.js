import React from 'react';
import ProductCard from './ProductCard';
import './../style/Products.scss';

export default function Products( { productData, productsInCart, setProductsInCart, colorFilters }) {

    return (
        <div className="products">
            {productData.map(product => (
                colorFilters[product.attributes.colors] &&
                <ProductCard 
                    productData={product}
                    key={product.id}
                    productsInCart={productsInCart}
                    setProductsInCart={setProductsInCart}
                />
            ))}
        </div>
    );
}