import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "../user/User";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullUser from "../../fullUser/FullUser";
class AllUsers extends Component {
    state = {users:[]}
    UserService = new UserService();

    async componentDidMount() {
let users = await this.UserService.users().then(value => value);
this.setState({users})
    }

    render() {
        let {users} = this.state;
let {match:{url}} = this.props;


        return (
            <div>


                {
users.map(value => <User item={value} key={value.id}/> )
                }
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        const {match:{params:{id}}} = props;

                        return  <FullUser {...props} id={id} key={id}/>;
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers);