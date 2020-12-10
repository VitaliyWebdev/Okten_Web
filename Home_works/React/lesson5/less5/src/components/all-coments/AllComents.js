import React, {Component} from 'react';
import ComentService from "../../services/ComentService";
import Coment from "../coment/Coment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullComments from "../../full-comments/FullComments";
class AllComents extends Component {

    state={comments:[]};
    comentService = new ComentService();

    async componentDidMount() {
        let comments = await this.comentService.getComments();
        this.setState({comments})
    }
    render() {
        let {comments} = this.state;
let {match:{url}} = this.props;
        return (
            <div>
                {
                    comments.map(value => <Coment key={value.id} item={value}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        let {match:{params:{id}}}=props;

                        return <FullComments key={id} {...props}/>
                    }}/>


                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllComents);