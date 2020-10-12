import React from 'react';
import './../style/Header.scss';

export default function Header( { navigationOpened, setNavigationOpened, productsInCart }) {

    return (
        <header>
            <div className="topbar">
                <div 
                    className={navigationOpened ? 'navbar-button close-icon' : 'navbar-button'} 
                    onClick={() => setNavigationOpened(!navigationOpened)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img 
                    src="/logo.svg" 
                    width="60" 
                    height="70"
                    alt="Logo"
                />
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
            </div>
            <h1>Panda Collection</h1>
        </header>
    );
}