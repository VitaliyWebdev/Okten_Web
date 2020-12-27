import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

export default function App (){
    const counter = useSelector((state)=>{
        return state.counter;
    })
    const todos = useSelector((state)=>{
        console.log(state.todos);
        return state.todos
    })
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`).then(value=>value.json()).then(value=> dispatch({type:'CHANGE_TODOS',payload:value}))
    },[counter])



    return (
        <div>
            <h1>Number:{counter}</h1>
            <button onClick={()=>dispatch({type:'INC_COUNTER'})}>+inc</button>
            <button onClick={()=>dispatch({type:'DEC_COUNTER'})}>-dec</button>
            <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
            <h2>{!!todos && <p>{todos.id}-{todos.title}</p>}</h2>
        </div>
    );
}