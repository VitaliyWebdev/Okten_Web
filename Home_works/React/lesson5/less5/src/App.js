import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsers from "./components/allUsers/AllUsers";
import AllPosts from "./components/AllPosts/AllPosts";
import AllComents from "./components/all-coments/AllComents";
import AllPeople from "./components/all-people/AllPeople";

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li>
                        <Link to={'/users'}>to all users</Link>
                    </li>
                    <li>
                        <Link to={'/posts'}>to all posts</Link>
                    </li>
                    <li>
                        <Link to={'/comments'}>to comments</Link>
                    </li>
                    <li>
                        <Link to={'/people'}>**to people**</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route path={'/users'} render={()=> <AllUsers/>}/>
                    <Route path={'/posts'} render={()=> <AllPosts/>}/>
                    <Route path={'/comments'} render={()=> <AllComents/>}/>
                    <Route path={'/people'} render={()=> <AllPeople/>}/>
                </Switch>

                <hr/>


            </div>
            </Router>
        );
    }
}

export default App;