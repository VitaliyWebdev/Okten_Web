import React, {Component} from 'react';
import '../styles/style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class People extends Component {
    render() {
let {item,match:{url},index} = this.props;


        return (
            <div>
               <div className={'box'}> {item.name} - {item.height} - {item.gender} <Link to={url+'/'+index}> more info</Link> </div>
            </div>
        );
    }
}

export default withRouter(People);

//
