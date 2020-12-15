import React, {Component} from 'react';
import UserService from "../services/UserService";

class User extends Component {
state ={user:null};
userService = new UserService();
   async componentDidMount() {
let user = await this.userService.getUser(this.props.numb)
this.setState({user})
    }


    render() {
        let {numb} = this.props;
        let {user} = this.state;
        console.log(user);
        return (
            <div>
                {user && <p>{user.name}   {user.id}  {user.email}</p> }
            </div>
        );
    }
}

export default User;