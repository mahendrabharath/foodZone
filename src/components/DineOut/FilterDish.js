import React, { useState } from 'react';
import { Checkbox } from 'antd';
import './FilterDish.scss'
const CheckboxGroup = Checkbox.Group;

const categoryOptions = [
    { label: 'Veg', value: 'Apple' },
    { label: 'Non-Veh', value: 'Pear' }
];

const categoryByType = [
    { label: 'North Indian', value: 'Apple' },
    { label: 'Desserts', value: 'Apple' },
    { label: 'Birani', value: 'Apple' },
    { label: 'South Indian', value: 'Apple' },
    { label: 'Beverages', value: 'Apple' },
    { label: 'Chinese', value: 'Apple' },
    { label: 'Fast Food', value: 'Pear' },
    { label: 'Continental', value: 'Pear' }
];


const categoryDeliveryTime = [
    { label: 'Up to 30 minutes', value: '30' },
    { label: 'Up to 45 minutes', value: '45' },
    { label: 'Up to 60 minutes', value: '60' }
];

const categoryByPrice = [
    { label: 'Less than 250', value: '30' },
    { label: 'Rs. 250 t0 Rs.500', value: '45' },
    { label: 'Rs. 500 t0 Rs.1000', value: '45' },
    { label: 'Rs. 1000 t0 Rs.2500', value: '45' },
    { label: 'Rs. 2500 +', value: '60' }
];

const FilterDish = props => {
    const [filter, setFilter] = useState([]);

    return <div className='filter-container'>
        <div className='filter-group'>
            <Checkbox.Group
                options={categoryOptions}
                onChange={() => { }}
            />
        </div>
        <div className='filter-group'>
            <Checkbox.Group
                options={categoryByType}
                onChange={() => { }}
            />
        </div>
        <div className='filter-group'>
            <Checkbox.Group
                options={categoryDeliveryTime}
                onChange={() => { }}
            />
        </div>
        <div className='filter-group'>
            {
                categoryByPrice.map((el, i) => <div key={i}>
                    <span>{el.label}</span>
                </div>)
            }
        </div>
    </div>
}

export default FilterDish;