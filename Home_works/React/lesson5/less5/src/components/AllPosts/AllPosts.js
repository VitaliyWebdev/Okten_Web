import React, {Component} from 'react';
import Post from "../post/Post";
import PostService from "../../services/PostService";

import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../../full-post/FullPost";


class AllPosts extends Component {
    state = {posts:[]};
     PostService = new PostService();
    async componentDidMount() {
        let posts = await this.PostService.getPosts().then(value => value);
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        console.log(props);
                        let {match:{params:{id}}}=props;
                        return <FullPost {...props} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);