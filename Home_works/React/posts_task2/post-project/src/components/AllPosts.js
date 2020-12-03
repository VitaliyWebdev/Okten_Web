import React, {Component} from 'react';
import PostItem from "./PostItem";
import './style.css'

class AllPosts extends Component {


    state = {posts:[],classState:'green',chosenUser:null}
    flag=false;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json()
            )
            .then(postsFromApi=>{
                this.setState({posts:postsFromApi})
            });
    }
changeColor=()=>{
        if(this.flag){
            this.setState({classState:'green'})
        }
        else{
            this.setState({classState:'red'})
        }
        this.flag=!this.flag

}


SetPost=(id)=>{
        let chosenUser = this.state.posts.find(value=>value.id===id);
        this.setState({chosenUser})
}
    render() {
        let {posts,classState,chosenUser} = this.state;


        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>Hello World</h1>
                {
               posts.map((value,index)=>(<PostItem item={value} key={index}/>))
                }

                <br/>
               {
                   chosenUser && (<PostItem item={chosenUser} SetPost={this.SetPost}/>)
               }
            </div>
        );
    }
}

export default AllPosts;