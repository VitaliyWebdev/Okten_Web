import React, {Component} from 'react';
import StarshipService from "../../services/StarshipService";
import StarShip from "./StarShip";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AllStarships extends Component {
    state = {starships:[]};

    starshipService = new StarshipService();

    async componentDidMount() {
        let starships = await this.starshipService.getStarships().then(value => value);
        this.setState({starships});
    }

    render() {
        let {starships} = this.state;
        return (
            <div>
                {
                    starships.map(value => {
                        let starshipId = value.url.split('/');
                        return <StarShip index={starshipId[5]} key={starshipId[5]} item={value} />
                    })
                }



            </div>
        );
    }
}

export default AllStarships;