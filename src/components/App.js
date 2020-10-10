import React, { useState } from 'react';

export default function App() {

    const [productData, setProductData] = useState([]);

    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => {
        setProductData(data);
    });

    return (
        <div>
            <h1>Hello there!</h1>
            <h3>Header three.</h3>
        </div>
    );
}