import React from 'react';
import './../style/Navigation.scss';

export default function Navigation() {

    return (
        <nav>                
            <div className="navbar-close-button">
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