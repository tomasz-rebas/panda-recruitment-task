import React from 'react';
import './../style/ProductCard.scss';

export default function ProductCard( { productData }) {

    const {id, title, currency, images, prices, attributes} = productData;

    return (
        <div className="product-card">
            <img 
                src={'http://localhost:3000' + images.thumbnail}
                width="216"
                height="290"
            />
            <button className="add-to-cart-button">Add to cart</button>
            <div className="product-name">{title}</div>
            <div className="price">{currency + prices.base}</div>
        </div>
    );
}