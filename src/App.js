import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreatePost from './CreatePost/CreatePost';
import Register from './Register/Register';
import Login from './Login/Login';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header/>
      <main className="main">
        <Switch>
        <Route path="/profile">
          <Profile/>
          </Route>
          <Route path="/post/create">
            <CreatePost/>
          </Route>
          <Route path="/register">
                      <Register />
                  </Route>
                  <Route path="/login">
                      <Login />
                  </Route>
        <Route path="/">
          <Feed/>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
