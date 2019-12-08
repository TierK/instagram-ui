import React, { Component } from 'react';
import './Feed.scss'
import Post from './Post/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loaded : false
        };
    }
    componentDidMount() {
        this.setState({loaded: true});
        fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
            .then(res => res.json())
            .then(posts => {
                this.setState({ posts, loaded: false});
            });
    }
    render() {


        function formatDate(dateStr){
            const date = new Date(dateStr);
            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            return months[date.getMonth()] + ' ' + date.getDate();
        }

        return (

            <div className="Feed container">
                {this.state.loaded ?
					<div className="Loader">
                            {<FontAwesomeIcon icon={ faCoffee  } size ="6x" spin />}
					</div> :
					null
				}
                {this.state.posts.map(post => {
                    return (
                        <Post 
                            key = {post.id}
                            id={post.id}
                            created={formatDate(post.created)}
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
                }
            </div>
        )
    }
}
