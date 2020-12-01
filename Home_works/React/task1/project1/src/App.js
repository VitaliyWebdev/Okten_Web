import React, {Component} from 'react';
import User from "./components/User";
import Cars from "./components/Cars";
class App extends Component {
    render() {
        return (
            <div>
              <User/>
<Cars/>
            </div>
        );
    }
}

export default App;