import React from 'react';

export default function Header() {

    return (
        <header>
            <div className="topbar">
                <div className="navbar-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img 
                    src="/logo.svg" 
                    width="60" 
                    height="70"
                />
                <img 
                    src="/icons/shopping-cart.svg"
                    width="50" 
                    height="60"
                />
            </div>
            <h1>Panda Collection</h1>
        </header>
    );
}