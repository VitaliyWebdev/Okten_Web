
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";


export default function User (){
    const dispatch = useDispatch();
    const store = useSelector(state=>state)
    console.log(store);
    const user = store.user;


    const saveHandler = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const id = Math.random();
        const age = event.target[1].value;
        dispatch({type:'ADD_USER',payload: {name,id,age}})
    }
    return (
        <div>
            <form onSubmit={saveHandler}>
                name: <input type="text"/>
                age: <input type="text"/>
                <button>save</button>
            </form>
            <div>
                {store.map(value=>(<p key={Math.random()}>age:{value.age} name:{value.name}</p>))}
            </div>
        </div>
    );
}