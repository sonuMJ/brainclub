import React from 'react';
import { Link } from 'react-router-dom';

class Topnavigation extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top -b-top-nav">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right -b-top-nav-ul">
                    <li className="active"><a href="#">Home</a></li>
                        <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                        </li>
                        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link ></li>
                    </ul>
                    </div>
                </div>
                </nav>
        );
    }
}

export default Topnavigation;