import React from 'react';
import NavbarButton from './NavbarButton';
import ShoppingCart from './ShoppingCart';
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
                <ShoppingCart productsInCart={productsInCart}/>
            </div>
            <h1>Panda Collection</h1>
        </header>
    );
}