export default class {

    url = 'https://jsonplaceholder.typicode.com/comments'

    async getComments(){
        return await fetch(this.url).then(value => value.json()).then(value => value);
    }

async getOneComent(id){
        return await fetch(this.url+'/'+id).then(value => value.json()).then(value => value)
}










}