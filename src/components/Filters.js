import React from 'react';
import './../style/Filters.scss';

export default function Filters( { colorFilters, setColorFilters }) {

    function changeFilter(event) {
        const { name } = event.target;
        setColorFilters({
            ...colorFilters,
            [name]: !colorFilters[name]
        })
    }

    const colors = [
        {
            name: 'blue',
            label: 'blue'
        },
        {
            name: 'yellow',
            label: 'pastel yellow'
        },
        {
            name: 'lime',
            label: 'lime green'
        },
        {
            name: 'mint',
            label: 'mint'
        }
    ];

    const filterInputs = colors.map((color, index) => (
        <li key={'color-'+index}>
            <input 
                type="checkbox"
                name={color.name}
                onChange={changeFilter}
                checked={colorFilters[color.name] ? true : false}
            />
            <span className={'color-preview color-preview-' + color.name}></span>
            <span className="color-name">{color.label}</span>
        </li>  
    ));
    
    return (
        <div className="filters">
            <h4>Filter by</h4>
            <h5>Color</h5>
            <ul>
                {filterInputs}
            </ul>
        </div>
    );
}