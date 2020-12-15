import React, {Component} from 'react';
import PostService from "../../Services/PostService";

class ChosenPost extends Component {

    state = {chosenPost: null}

    postService = new PostService();

    async componentDidMount() {



        let chosenPost = await this.userService.getAllPosts();
        this.setState({chosenPost})
    }

    render() {
        let{chosenPost}=this.state;
        return (
            <div>
                {chosenPost.id}-{chosenPost.title}-{chosenPost.body}
            </div>
        );
    }
}

export default ChosenPost;