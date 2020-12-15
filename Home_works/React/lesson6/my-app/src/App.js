import React, {Component} from 'react';
import AllUsers from "./components/AllUsers";

class App extends Component {

// send = (event)=>{
//   event.preventDefault();
//   console.log(this.myForm.current[0].value);
// }


    render() {


      return (
            <div>

           <AllUsers/>
            </div>
        );
    }
}

export default App;