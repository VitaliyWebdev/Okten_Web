import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "../user/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AllUsers extends Component {
    state={users:[]}
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users})
    }

    render() {
        let {users} = this.state;

        return (
            <div>
                {
                    users.map(value => <User key={value.id} item={value}/>)
                }

                <div>
                    <Switch>
                        <Route path={'/users/:id'} render={(props)=>{
                            console.log(props)
                            return
                        }}/>

                    </Switch>
                </div>
            </div>
        );
    }
}

export default AllUsers;