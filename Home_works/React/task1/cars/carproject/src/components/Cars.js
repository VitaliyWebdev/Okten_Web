import React, {Component} from 'react';
import './User.css'

class Cars extends Component {


    render() {
let {item}=this.props

        return (
            <div>
<p style={{backgroundColor: "red"}}>{item.name}</p>
            </div>
        );
    }
}

export default Cars;