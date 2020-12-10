import React, {Component} from 'react';
import PostService from "../services/PostService";

class FullPost extends Component {
PostService = new PostService();
    state = {post:null};
   async componentDidMount() {
let {match:{params:{id}}} = this.props;
        let post = await this.PostService.post(id);
        this.setState({post})
    }

    render() {
        let {item} = this.props;
        let {post} = this.state;
        return (
            <div>
                { post && <div>{post.id}-{post.userId}-{post.title}</div> }
            </div>
        );
    }
}

export default FullPost;