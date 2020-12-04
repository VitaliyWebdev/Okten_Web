import React, {Component} from 'react';
import './style.css'
class Album extends Component {
    render() {
        let {item,setElement} = this.props
        return (
            <div>
               {item.id} {item.title}
                <button onClick={()=>{setElement(item.id)}}> Click me </button>
                    <hr/>


            </div>
        );
    }
}

export default Album;