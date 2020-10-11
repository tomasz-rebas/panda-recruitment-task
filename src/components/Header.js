import React from 'react';
import './../style/Header.scss';

export default function Header( { setNavigationOpened }) {

    return (
        <header>
            <div className="topbar">
                <div className="navbar-button" onClick={() => setNavigationOpened(true)}>
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
                    <div className="cart-quantity-icon">
                        <span>17</span>
                    </div>
                </div>
            </div>
            <h1>Panda Collection</h1>
        </header>
    );
}