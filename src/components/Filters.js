import React from 'react';
import './../style/Filters.scss';

export default function Filters( { colorFilters, setColorFilters, areFiltersExpanded, setAreFiltersExpanded }) {

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
            <h4 className="filters-header">Filter by</h4>
            <h4 
                className="filters-header-mobile"
                onClick={() => setAreFiltersExpanded(!areFiltersExpanded)}
            >
                Filter by
                <span className="expand-icon">{areFiltersExpanded ? '-' : '+'}</span>
            </h4>
            <div className={areFiltersExpanded ? 'filter-list filter-list-expanded' : 'filter-list'}>
                <h5>Color</h5>
                <ul>
                    {filterInputs}
                </ul>
            </div>
        </div>
    );
}