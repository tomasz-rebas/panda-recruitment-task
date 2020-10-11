import React from 'react';
import './../style/Filters.scss';

export default function Filters() {

    return (
        <div className="filters">
            <h4>Filter by</h4>
            <h5>Color</h5>
            <ul>
                <li>
                    <input type="checkbox"/>
                    <span className="color-preview blue"></span>
                    <span className="color-name">blue</span>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span className="color-preview pastel-yellow"></span>
                    <span className="color-name">pastel yellow</span>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span className="color-preview lime-green"></span>
                    <span className="color-name">lime green</span>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span className="color-preview mint"></span>
                    <span className="color-name">mint</span>
                </li>
            </ul>
        </div>
    );
}