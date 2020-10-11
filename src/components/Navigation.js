import React from 'react';
import './../style/Navigation.scss';

export default function Navigation() {

    return (
        <nav>                
            <div className="navbar-close-button">
                <span></span>
                <span></span>
            </div>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">My Account</a>
            <a href="">Customer Service</a>
        </nav>
    );
}