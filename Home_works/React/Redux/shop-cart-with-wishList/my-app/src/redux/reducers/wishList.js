import {TOGGLE_ITEM_IN_WISHLIST} from "../action-types";
import {act} from "@testing-library/react";

const initialState = {
    wishlist : []
}


export const reducer = (state=initialState,action) =>{
    switch (action.type){

        case TOGGLE_ITEM_IN_WISHLIST :{
            const updatedWishlist = state.wishlist.filter(el => el.id !== action.payload.id)
            if( updatedWishlist.length === state.wishlist.length ){
                updatedWishlist.push(action.payload)
            }

            return {...state,wishlist: updatedWishlist};

        }

        default:{
            return state;
        }
    }
}
export default  reducer;