
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";


export default function User (){
    const dispatch = useDispatch();
    const store = useSelector(state=>state)

    const user = store.user;


    const saveHandler = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const id = Math.random();
        const age = event.target[1].value;
        dispatch({type:'ADD_USER',payload: {name,id,age}})
    }
    const removeHandler = (event) => {
        event.preventDefault();
        const removeId = event.target[0].value
       dispatch({type:'DELETE_USER',payload:+removeId})

    }

    return (
        <div>
            <form onSubmit={removeHandler} >
                <div>
                   <input type="text"/>
                    <button>  Write down id and remove user</button>
                </div>

            </form>
            <hr/>
            <form onSubmit={saveHandler}>
                name: <input type="text"/>
                age: <input type="text"/>
                <button>save</button>
            </form>
            <div>
                {store.map(value=>(<p key={Math.random()}>age:{value.age} name:{value.name} id:{value.id}</p>))}

            </div>

        </div>
    );
}