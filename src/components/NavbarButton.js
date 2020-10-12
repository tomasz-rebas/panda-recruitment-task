import React from 'react';
import './../style/NavbarButton.scss';

export default function NavbarButton( { isNavigationOpened, setIsNavigationOpened }) {

    return (
        <div 
            className={isNavigationOpened ? 'navbar-button close-icon' : 'navbar-button'} 
            onClick={() => setIsNavigationOpened(!isNavigationOpened)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}