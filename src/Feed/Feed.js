import React, { Component } from 'react';
import './Feed.scss'
import Post from './Post/Post';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
            .then(res => res.json())
            .then(posts => {
                this.setState({ posts });
            });
    }
    render() {
        function unixDateConvert(unixDate) {
            const converter = new Date(unixDate * 1000);
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let date = `${converter.getDate()} ${months[converter.getMonth()]} ${converter.getFullYear()}`;
            return date;
        }

        return (

            <div className="Feed">
                {
                    this.state.posts.map(post => {
                        return (
                            <Post
                                id={post.id}
                                created={unixDateConvert(post.created)}
                                imgUrl={post.image}
                                title={post.title}
                                likes={post.likes}
                            >
                                <div className="postTags">{post.tags.map(tag=>{
                                    return (<div>#{tag}</div>);
                                })}</div>
                            </Post>
                        );
                    })
                }</div>
        )
    }
}
