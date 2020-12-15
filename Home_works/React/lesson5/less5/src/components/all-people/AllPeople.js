import React, {Component} from 'react';
import PeopleService from "../../services/PeopleService";
import People from "../people/People";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPeople from "../../full-people/FullPeople";
class AllPeople extends Component {

state={people:[]}
peopleService = new PeopleService();

 async componentDidMount() {
    let people = await this.peopleService.getPeople();
    this.setState({people:people.results})
}

    render() {
let {people} = this.state;
        let {match:{url}} = this.props;
        console.log(url);
        return (

            <div>
                {
                  people.map(value =>{
                      let personId = value.url.split('/');
                      return ( <People index={personId[5]} key={personId[5]} item={value}/>)
                  } )
                    }

                <div className={'switch-box'}>
                <Switch>


                    <Route path={url+'/:id'} render={(props)=>{
                        let {match:{params:{id}}} = props;
                        console.log(id);
                        return <FullPeople {...props} key={id}/>
                    }}/>

                </Switch>


                </div>

            </div>
        );
    }
}

export default withRouter(AllPeople);

