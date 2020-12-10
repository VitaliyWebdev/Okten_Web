import React, {Component} from 'react';
import Coment from "../components/coment/Coment";
import ComentService from "../services/ComentService";

class FullComments extends Component {
    state = {comment:null}
    commentsService = new ComentService();


  async  componentDidMount() {
      let {match:{params:{id}}}=this.props;
        let comment = await this.commentsService.getOneComent(id);
        this.setState({comment})

    }

    render() {

        let {comment} = this.state;
        return (
            <div>
                { comment && <div>{comment.id}-{comment.name} - {comment.email}</div> }
            </div>
        );
    }
}

export default FullComments;