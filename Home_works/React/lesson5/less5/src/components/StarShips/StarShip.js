import React, {Component} from 'react';
import Link from "react-router-dom/modules/Link";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
class StarShip extends Component {

    render() {
        let {item,match:{url},index} = this.props;
        return (
            <div>
               <div>{item.name}-{item.length}<Link to={url+'/'+index}>more info</Link></div>
            </div>
        );
    }
}

export default withRouter(StarShip);