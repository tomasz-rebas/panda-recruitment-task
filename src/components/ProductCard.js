import React from 'react';
import './../style/ProductCard.scss';

export default function ProductCard( { productData, productsInCart, setProductsInCart }) {

    const {title, currency, images, prices} = productData;

    return (
        <div className="product-card">
            <img 
                src={process.env.REACT_APP_PRODUCT_API_URL + images.thumbnail.substring(1)}
                width="216"
                height="290"
                alt="Product"
            />
            <button 
                className="add-to-cart-button"
                onClick={() => setProductsInCart(productsInCart + 1)}
            >
                Add to cart
            </button>
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
            {
                prices.after_discount &&
                <img 
                    src="/icons/sale.svg"
                    width="50" 
                    height="60"
                    alt="Sale"
                    className="sale-icon"
                />
            }
        </div>
    );
}