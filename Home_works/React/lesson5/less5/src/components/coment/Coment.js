import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Coment extends Component {


    render() {

        let {item,match:{url}} = this.props;
        console.log(this.props.match);

        return (
            <div>
                {item.name}-{item.id} <Link to={url+'/'+item.id}>info</Link>
            </div>
        );
    }
}

export default withRouter(Coment);