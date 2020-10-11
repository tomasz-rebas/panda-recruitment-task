import React from 'react';
import './../style/Navigation.scss';

export default function Navigation( { navigationOpened, setNavigationOpened }) {

    return (
        <nav className={navigationOpened ? 'nav-open' : 'nav-closed'}>                
            <div className="navbar-close-button" onClick={() => setNavigationOpened(false)}>
                <span></span>
                <span></span>
            </div>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/my_account">My Account</a>
            <a href="/customer">Customer Service</a>
        </nav>
    );
}