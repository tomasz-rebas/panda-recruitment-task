import React from 'react';
import './../style/ShoppingCart.scss';

export default function ShoppingCart( { productsInCart }) {

    return (
        <div>
            <img 
                src="/icons/shopping-cart.svg"
                width="50" 
                height="60"
                alt="Shopping cart"
            />
            {
                productsInCart > 0 &&
                <div className="cart-quantity-icon">
                    <span>{productsInCart}</span>
                </div>
            }
        </div>
    );
}