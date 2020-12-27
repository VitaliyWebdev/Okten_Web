
const initialState ={
    todos:[]
}

const todosReducer = (state=initialState,action)=>{
    switch (action.type){
        case 'SET_TODOS':{
            return {...state, todos:[]}
        }
        case 'TOGGLE_TODO_STATUS':{
            return {...state, todos:[]}
        }
        case 'REMOVE_TODO':{
            return {...state, todos:[]}
        }
        default:{
            return state;
        }
    }
}

export default todosReducer