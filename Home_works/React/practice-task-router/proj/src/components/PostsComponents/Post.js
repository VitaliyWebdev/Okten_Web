import React, {Component} from 'react';
import PostService from "../../Services/PostService";

class Post extends Component {


    render() {

let {item} = this.props;


        return (
            <div className={'asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}>
                {item.id}-{item.body}

            </div>
        );
    }
}

export default Post;