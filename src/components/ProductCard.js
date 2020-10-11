import React from 'react';
import './../style/ProductCard.scss';

export default function ProductCard( { productData }) {

    const {title, currency, images, prices, attributes} = productData;

    return (
        <div className="product-card">
            <img 
                src={'http://localhost:3000' + images.thumbnail}
                width="216"
                height="290"
                alt="Product"
            />
            <button className="add-to-cart-button">Add to cart</button>
            <div className="product-name">{title}</div>
            <div className="prices">     
                {
                    prices.after_discount &&
                    <span className="price-old">{currency + prices.base}</span>
                }
                <span className="price">
                    {
                        prices.after_discount ? 
                        currency + prices.after_discount : 
                        currency + prices.base
                    }
                </span>
            </div>
        </div>
    );
}