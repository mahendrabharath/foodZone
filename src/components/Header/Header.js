import React from 'react';
import { AppLogo } from '../../assets/images';
import './Header.scss';

const Header = props => {

    return <div className='header'>
        <div className='app-logo'>
            <img src={AppLogo} alt='logo' />
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
}

export default Header;