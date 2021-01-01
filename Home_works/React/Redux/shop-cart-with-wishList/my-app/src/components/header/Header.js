import React from 'react';
import '../styles/main.css';

export const Header = (props) =>{
    return (<header>
        <div>Hello in shop</div>
        <div className='box'>
            <div className='padding'>cart :</div>
            <div className='padding'>wishlist :</div>
        </div>
    </header>)
}

