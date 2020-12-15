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
import ChosenPost from "../PostsComponents/ChosenPost";
import AllPosts from "../PostsComponents/AllPosts";
import PostService from "../../Services/PostService";
import Post from "../PostsComponents/Post";

class AllUsers extends Component {

    userService = new UserService();
    postService = new PostService();
    state = {users: [], chosenOne: null}

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users})


    }



    render() {

        let {match: {url}} = this.props
        let {users,posts} = this.state;
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

                    <Route path={'/posts'}>
                        <AllUsers/>
                        <AllPosts/>
                        <User/>
                        <ChosenUser/>
                    </Route>



}/>
                </Switch>


            </div>
        );
    }
}

export default withRouter(AllUsers);