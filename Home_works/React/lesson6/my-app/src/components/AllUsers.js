import React, {Component} from 'react';
import User from "./User";

class AllUsers extends Component {

    myForm = React.createRef();
state = {num:''}

    send = (event) =>{
        event.preventDefault();
        this.setState({num:this.myForm.current[0].value})
    }

    render() {
let {num} = this.state;

        return (
            <div>
                <form action={'/chosenUser'} onSubmit={this.send} ref={this.myForm}>
                    <input type="number"/>
                    <button>open user by id</button>
                </form>
                <hr/>
              <User numb={num} key={Math.random()}/>
                <hr/>
            </div>
        );
    }
}

export default AllUsers;