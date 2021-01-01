import {SET_PRODUTS} from "../action-types";

const initialState = {
    products : []
}


export const reducer = (state=initialState,action) =>{
    switch (action.type){
        case SET_PRODUTS :{
            return {...state,products: action.payload}
        }
        default:{
            return state;
        }
    }
}
export default  reducer;