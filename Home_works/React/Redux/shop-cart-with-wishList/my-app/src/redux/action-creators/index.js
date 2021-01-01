import {SET_PRODUTS, TOGGLE_ITEM_IN_CART, TOGGLE_ITEM_IN_WISHLIST} from "../action-types";
import {services} from "../../services";
const {productsService}  = services;
export const setProducts = () => async (dispatch) => {

const response = await productsService.getProducts();
const json = await response.json();
        dispatch({type:SET_PRODUTS,payload:json})
}

export const toggleItemInCart =  (product)=>({type:TOGGLE_ITEM_IN_CART,payload:product})
export const toggleItemInWishList = (product)=>({type:TOGGLE_ITEM_IN_WISHLIST,payload:product})
