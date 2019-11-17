import React, { Component } from 'react'
import './Post.scss'


export default class Post extends Component {
    render() {
        return (
            <div className="Post">
                <header>
                    <div>Name: {this.props.id}  Created: {this.props.created}</div>
                </header>
                <div className="userImg"><img src={this.props.imgUrl} alt="userLogo"/></div>
                <div>{this.props.title}</div>
                <footer>
                <div>{this.props.tags}</div>
        <div>Likes: {this.props.likes}</div>
                </footer>
            </div>
        )
    }
}
