import React, {Component} from 'react';
import User from "./User";

class AllUsers extends Component {

    myForm = React.createRef();
state = {num:'',user:[]}
    send = (event) =>{
        event.preventDefault();
      this.setState({num:this.myForm.current[0].value})
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users/'+this.state.num).then(value => value.json()).then(value => this.setState({user:value}))

    }
    render() {
let {num,user} = this.state;
        console.log(num);
        return (
            <div>
                <form action={'/chosenUser'} onSubmit={this.send} ref={this.myForm}>
                    <input type="number"/>
                    <button>open user by id</button>
                </form>
                <hr/>
                {
                    user.map(value => <User key={value.id} item={value}/>)
                }
                <hr/>
            </div>
        );
    }
}

export default AllUsers;