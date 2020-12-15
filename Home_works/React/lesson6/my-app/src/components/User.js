import React, {Component} from 'react';

class User extends Component {
state = {user:[]}
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users'+'/'+this.num+'/').then(value => value.json()).then(value => this.setState({user:value}))
}

    render() {
        let {num} = this.props;
        console.log(num);
let {users} = this.state;
        return (
            <div>

            </div>
        );
    }
}

export default User;