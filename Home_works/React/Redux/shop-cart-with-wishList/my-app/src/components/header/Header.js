import React,{useMemo,useState} from 'react';
import '../styles/main.css';
import {useSelector} from "react-redux";

export const Header = (props) =>{
    const {cart,wishlist} = useSelector(({cart: {cart},wishlist:{wishlist}})=>({cart,wishlist}))
    console.log(cart);

    let cartPrice = 0;
    let wishListPrice = 0;
    useMemo(()=>{
        console.log('changed')
        for (const item of cart) {
            cartPrice += item.price
        }

    },[cart]);

    useMemo(()=>{
        console.log('changed')
        for (const item of wishlist) {
            wishListPrice += item.price
        }

    },[wishlist])



    return (<header>
        <div>Hello in shop</div>
        <div className='box'>
            <div className='padding' title={'total amount:'+cartPrice+'$'}>cart : {cart.length}</div>
            <div className='padding' title={'total amount:'+wishListPrice+'$'}>wishlist : {wishlist.length}</div>
        </div>
    </header>)
}

