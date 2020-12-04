import React, {Component} from 'react';
import Album from "./Album";
import './style.css'
class Albums extends Component {

    state = {albums: [], colorState: 'orange',chosenUser:null};
    flag = false;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value =>
                value.json()
            )
            .then(valueFromApi => {
                this.setState({albums: valueFromApi})
            });
    }

    changecolor = () => {
        if (this.flag) {
            this.setState({colorState: 'green'})
        } else {
            this.setState({colorState: 'orange'})
        }
this.flag=!this.flag
    }

    setElement = (id)=>{
let chosenUser = this.state.albums.find(value => value.id === id)
this.setState({chosenUser})
    }


    render() {
        let {albums, colorState,chosenUser} = this.state
        return (
            <div>
                <h2 onClick={this.changecolor} className={colorState} >CLICKKK MEEEEEE</h2>
                {
                    albums.map((value, index) => (<Album item={value} key={index} setElement={this.setElement}/>))
                }
                <hr/>
                <div>
                    {
                        chosenUser && <Album item={chosenUser}/>
                    }
                </div>
            </div>

        );
    }
}

export default Albums;