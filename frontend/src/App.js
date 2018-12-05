import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus';
import Sidenavigation from './components/navigations/Sidenavigation';
import Topnavigation from './components/navigations/Topnavigation';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import News from './components/News/News';
import Singlenews from './components/News/Singlenews';


class App extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div className="container-fluid -b-body">
        <Topnavigation />
        <div className="-b-side">
            <Sidenavigation />
        </div>
        <div className="-b-main">
            <div className="container-fluid -b-content">
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/about" exact component={ Aboutus } />
                    <Route path="/login" exact component={ Login } />
                    <Route path="/signup" exact component={ Signup } />
                    <Route path="/news" exact component={ News } />
                    <Route path="/news/:id" component={ Singlenews } />
                </Switch>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
