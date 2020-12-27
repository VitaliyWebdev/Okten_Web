import{
    INC_COUNTER,
    DEC_COUNTER,
    RESET
} from '../action-types'
const initialState ={
    counter:0
}

 const counterReducer = (state=initialState,action)=>{
    switch (action.type){
        case INC_COUNTER:{
            return {...state,counter:state.counter+1}
        }
        case DEC_COUNTER:{
            return {...state,counter:state.counter-1}
        }
        case RESET:{
            return {...state,counter:0}
        }
        default:{
            return state;
        }
    }
}

export default counterReducer