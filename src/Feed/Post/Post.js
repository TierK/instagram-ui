import React, { Component } from 'react';
import './Post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';



export default class Post extends Component {
    
    render() {
        const rawImage = this.props.imgUrl || this.props.image || '';
        const imageSrc = rawImage.startsWith('http') || rawImage.startsWith('/') 
            ? rawImage 
            : (config.imgUrl ? `${config.imgUrl}/${rawImage}` : rawImage);

        return (
            <div className="Post">
                <header>
                    <div> {<FontAwesomeIcon icon={faUserAlt} />} {this.props.id}</div>
                    <div> {<FontAwesomeIcon icon={faCalendarAlt} />} {this.props.created}</div>
                </header>
                <div className="userImg"><img src={imageSrc} alt={this.props.title || "post image"} /></div>
                <div className="userTitle">{this.props.title}</div>
                <footer>
                    <div>{this.props.children}</div>
                    <div className="likes"><FontAwesomeIcon icon={faHeart} /> {this.props.likes}</div>
                </footer>
            </div>
        )
    }
}
