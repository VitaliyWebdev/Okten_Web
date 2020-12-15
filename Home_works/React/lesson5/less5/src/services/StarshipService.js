export default class StarshipService {
    url='https://swapi.dev/api/starships/9/'

async getStarships(){
        return await fetch(this.url).then(value => value.json());
}




}