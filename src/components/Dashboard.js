import React, { Component } from 'react';
import './Dashboard.scss';
import { FoodDelivery, AppLogo, DineOut, Grocery } from '../assets/images'; 
import { Route, Link } from 'react-router-dom';

class Dashboard extends Component {
    state = {
        backgroundStyle: {
            backgroundImage: '..'
        }
    };

    onLinkCliked = () => {

    }

    render() {

        return (
            <div className='dashboard'>
                <div className='header'>
                    <div className='app-logo'>
                        <img src={ AppLogo } alt='logo'/>
                    </div>
                    <div className='app-name'>
                        Food zone
                    </div>
                    <div className='app-login'>
                        <span>
                            Login
                        </span>
                    </div>
                </div>
                <div className='main-body'>
                    <div className='pages'>
                        <Link to='/food-delivery' onClick={this.onLinkCliked}>
                            <img src={ FoodDelivery } alt='logo' />
                        </Link>
                        Food Delivery
                    </div>
                    <div className='pages'>
                        <Link to='/dine-out' onClick={this.onLinkCliked}>
                            <img src={ DineOut } alt='logo' />
                        </Link>
                        Dine Out
                    </div>
                    <div className='pages'>
                        <Link to='/dine-out' onClick={this.onLinkCliked}>
                            <img src={ Grocery } alt='logo' />
                        </Link>
                        Groceries
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;