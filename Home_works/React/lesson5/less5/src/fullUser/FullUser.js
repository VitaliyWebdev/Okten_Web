import React, {Component} from 'react';
import User from "../components/user/User";
import UserService from "../services/UserService";

class FullUser extends Component {
    state = {user:null}

    userService = new UserService();
    async componentDidMount() {

        let {id} = this.props;
        let user = await this.userService.user(id);
        this.setState({user})

    }

    render() {
        let {user}=this.state;
        return (
            <div>

                {user &&  <div>{user.id}-{user.name}-{user.username}-{user.email}</div>}

            </div>
        );
    }
}

export default FullUser;

