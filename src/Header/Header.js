import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import UserBox from './UserBox/UserBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" className="Header">
                <Navbar.Brand as={Link} to="/">
                    <div className="Header__logo">
                        <span role="img" aria-label="camera">📸</span>
                        <span className="Header__logo-text">InstaClone</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="menu mx-auto">
                        <Link className="nav-link Header__nav-link" to="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                        <Link className="nav-link Header__nav-link" to="/profile">
                            <FontAwesomeIcon icon={faUser} /> Profile
                        </Link>
                        <Link className="nav-link Header__nav-link" to="/post/create">
                            <FontAwesomeIcon icon={faPlusSquare} /> New Post
                        </Link>
                    </Nav>
                    <UserBox />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}