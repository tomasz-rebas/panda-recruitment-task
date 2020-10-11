import React from 'react';
import './../style/ProductCard.scss';

export default function ProductCard( { productData }) {

    return (
        <div className="product-card">
            <img 
                src={'http://localhost:3000' + productData.images.thumbnail}
                width="216"
                height="290"
            />
            <button className="add-to-cart-button">Add to cart</button>
            <div>{productData.title}</div>
        </div>
    );
}