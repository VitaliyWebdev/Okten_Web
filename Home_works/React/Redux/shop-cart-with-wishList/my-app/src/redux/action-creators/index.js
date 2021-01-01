import {SET_PRODUTS} from "../action-types";
import {services} from "../../services";
const {productsService}  = services;
export const setProducts = () => async (dispatch) => {

const response = await productsService.getProducts();
const json = await response.json();
        dispatch({type:SET_PRODUTS,payload:json})
}
