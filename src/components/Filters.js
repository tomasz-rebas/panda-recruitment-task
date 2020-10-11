import React from 'react';

export default function Filters() {

    return (
        <div className="filters">
            <h4>Filter by</h4>
            <h5>Color</h5>
            <ul>
                <li>
                    <input type="checkbox"/>
                    <span className="color-preview"></span>
                    <span>blue</span>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span className="color-preview"></span>
                    <span>pastel yellow</span>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span className="color-preview"></span>
                    <span>lime green</span>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span className="color-preview"></span>
                    <span>mint</span>
                </li>
            </ul>
        </div>
    );
}