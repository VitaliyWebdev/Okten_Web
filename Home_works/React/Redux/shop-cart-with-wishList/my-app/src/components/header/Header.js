import React from 'react';
import '../styles/main.css';
import {useSelector} from "react-redux";

export const Header = (props) =>{
    const {cart,wishlist} = useSelector(({cart: {cart},wishlist:{wishlist}})=>({cart,wishlist}))
    return (<header>
        <div>Hello in shop</div>
        <div className='box'>
            <div className='padding' title='cart'>cart : {cart.length}</div>
            <div className='padding' title='wishlist'>wishlist : {wishlist.length}</div>
        </div>
    </header>)
}

