import React, {Component} from 'react';
import PeopleService from "../services/PeopleService";

class FullPeople extends Component {
    state = {person:null}
peopleService = new PeopleService();

    async componentDidMount() {
        let {match:{params:{id}}} = this.props;
        console.log(id)
        let person = await  this.peopleService.getOnePerson(id);
        this.setState({person})
    }

    render() {
        let {person} = this.state;
        console.log(person);
        return (
            <div>
                { person && <div>{person.name}</div> }
            </div>
        );
    }
}

export default FullPeople;