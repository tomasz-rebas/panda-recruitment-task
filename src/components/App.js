import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Filters from './Filters';
import Products from './Products';
import './../style/App.scss';

export default function App() {

    const [productData, setProductData] = useState([]);
    const [isNavigationOpened, setIsNavigationOpened] = useState(false);
    const [productsInCart, setProductsInCart] = useState(0);
    const [colorFilters, setColorFilters] = useState({
        blue: true,
        yellow: true,
        lime: true,
        mint: true
    });

    useEffect(() => {
        fetch(process.env.REACT_APP_PRODUCT_API_URL + 'api/products')
        .then(response => response.json())
        .then(data => {
            setProductData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });;
    }, []);

    return (
        <div className="wrapper">
            <Header 
                isNavigationOpened={isNavigationOpened}
                setIsNavigationOpened={setIsNavigationOpened}
                productsInCart={productsInCart}
            />
            {isNavigationOpened && <Navigation/>}
            <main>
                <Filters 
                    colorFilters={colorFilters}
                    setColorFilters={setColorFilters}
                />
                <Products 
                    productData={productData}
                    productsInCart={productsInCart}
                    setProductsInCart={setProductsInCart}
                    colorFilters={colorFilters}
                />
            </main>
        </div>
    );
}