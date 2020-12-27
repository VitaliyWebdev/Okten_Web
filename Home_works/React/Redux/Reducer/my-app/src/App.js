import React, {useState,useEffect,useReducer} from 'react'

const reducer = (state,action)=>{
    switch (action.type){
        case 'change':{
            console.log(state);
            return action.payload;
        }

        default:{
            return state;
        }
    }
}
const initialState = {
        userId: null,
        id: null,
        title: "",
        completed: true,
    }

export default function App (){
    const [count,setCount] = useState(0);
    const [state,dispatch] = useReducer(reducer,initialState);
    
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`).then(value=>value.json()).then(value=>dispatch({type:'change',payload:value}))
},[count])




    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(prev=> prev +=1)}}>+1</button>
            {
                !!state && (<>
                    <p>{state.id}</p>
                    <p>{state.title}</p>
                    <p>{state.completed.toString()}</p>
                </>)
            }

        </div>
    );
}