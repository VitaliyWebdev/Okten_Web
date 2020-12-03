import React, {Component} from 'react';
import './style.css'
class PostItem extends Component {
    render() {
let {item,SetPost} = this.props
        return (
            <div className={"flex-box"}>
                <ul className={'span-Box'}><li> {item.title}  - {item.userId}</li></ul>
                <button onClick={()=>{
                    SetPost(item.id)
                }}>
CLick me
                </button>
            </div>
        );
    }
}

export default PostItem;