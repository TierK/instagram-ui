import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCamera } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="Footer">
            <div className="Footer__inner">
                <div className="Footer__brand">
                    <span role="img" aria-label="camera">📸</span>
                    <span className="Footer__brand-name">InstaClone</span>
                </div>

                <nav className="Footer__links">
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/post/create">New Post</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </nav>

                <p className="Footer__copy">
                    <FontAwesomeIcon icon={faCamera} /> &copy; {year} InstaClone &mdash; Made with{' '}
                    <FontAwesomeIcon icon={faHeart} className="Footer__heart" /> for fun
                </p>
            </div>
        </footer>
    );
}

export default Footer;
