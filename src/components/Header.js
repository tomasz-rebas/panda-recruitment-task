import React from 'react';
import NavbarButton from './NavbarButton';
import './../style/Header.scss';

export default function Header( { isNavigationOpened, setIsNavigationOpened, productsInCart }) {

    return (
        <header>
            <div className="topbar">
                <NavbarButton
                    isNavigationOpened={isNavigationOpened}
                    setIsNavigationOpened={setIsNavigationOpened}
                />
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