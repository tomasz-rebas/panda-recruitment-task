import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import './../style/Products.scss';

export default function Products( { productData }) {

    return (
        <div className="products">
            {productData.map(product => (
                <ProductCard productData={product}/>
            ))}
        </div>
    );
}