import React, { useState, useEffect } from 'react';
import './../style/App.scss';
import Header from './Header';
import Navigation from './Navigation';
import Filters from './Filters';
import Products from './Products';

export default function App() {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            setProductData(data);
        });
    }, [])

    return (
        <div>
            <Header/>
            <Navigation/>
            <main>
                <Filters/>
                <Products productData={productData}/>
            </main>
        </div>
    );
}