import React, { Component } from 'react';
import './Post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserAlt, faHeart } from '@fortawesome/free-solid-svg-icons';




export default class Post extends Component {
    render() {
        return (
            <div className="Post">
                <header>
                    <div> {<FontAwesomeIcon icon={faUserAlt} />} {this.props.id}</div>
                    <div> {<FontAwesomeIcon icon={faCalendarAlt} />} {this.props.created}</div>
                </header>
                <div className="userImg"><img src={this.props.imgUrl} alt="userLogo" /></div>
                <div className="userTitle">{this.props.title}</div>
                <footer>
                    <div>{this.props.children}</div>
                    <div className="likes"><FontAwesomeIcon icon={faHeart} /> {this.props.likes}</div>
                </footer>
            </div>
        )
    }
}
