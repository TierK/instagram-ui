import React, { Component } from 'react';
import './Header.scss'; 
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import UserBox from './UserBox/UserBox';
export default class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" class="Header">
                    <Navbar.Brand href="#home"><img src="logo.png" style={{width: '60px'}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="menu mr-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/profile">Profile</Link>
                            <Link className="nav-link" to="/post/create">New Post</Link>
                            </Nav>
                            <UserBox />
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}