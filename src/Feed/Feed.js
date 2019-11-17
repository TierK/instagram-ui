import React, { Component } from 'react';
import './Feed.scss'
import Post from './Post/Post';

export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state ={
            posts: []
        };
    }

    componentDidMount(){
        fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
            .then(res => res.json())
            .then(posts => {
                this.setState({posts});
            });
    }
    render() {
        return (
            <div className="container">
                {
                this.state.posts.map(post =>{
                    return(
                        <Post
                        id = {post.id}
                        created = {post.created}
                        imgUrl = {post.image}
                        title = {post.title}
                        tags = {post.tags}
                        likes = {post.likes}
                />
                    );
                })     
       }</div>
        )
    }
}
