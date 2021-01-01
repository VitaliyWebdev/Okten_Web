import {TOGGLE_ITEM_IN_CART} from "../action-types";

const initialState = {
    cart : []
}


const reducer = (state=initialState,action) =>{
switch (action.type){
    case TOGGLE_ITEM_IN_CART :{
        const UpdatedCart = state.cart.filter(el=> el.id !== action.payload.id)
        if(UpdatedCart.length === state.cart.length){
            UpdatedCart.push(action.payload)
        }
        return {...state,cart:UpdatedCart}
    }
    default:{
        return state;
    }
}
}
export default  reducer;