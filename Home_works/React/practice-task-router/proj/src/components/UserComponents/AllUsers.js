import React, {Component} from 'react';
import UserService from "../../Services/UserService";
import User from "./User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import ChosenUser from "./ChosenUser";

class AllUsers extends Component {

    userService = new UserService();
    state = {users: [], chosenOne: null}

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users})
    }

    render() {
        console.log(this.props);
        let {match: {url}} = this.props
        let {users} = this.state;
        return (<div className={'main-all-users-box'}>
                <div className={'all-users'}>
                    {
                        users.map(value => <User key={value.id} item={value}/>)
                    }

                </div>

                <Switch>

                    <Route path={url+'/:id'} render={(props) => {
                        console.log(props);
                        let {match: {params: {id}}} = props;

                        return (<div className={'detailes'}>
                            <ChosenUser key={id} {...props}/>
                        </div>)
                    }}/>


                </Switch>


            </div>
        );
    }
}

export default withRouter(AllUsers);