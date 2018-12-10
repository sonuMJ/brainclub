import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

class Sidenavigation extends React.Component{
    render(){
        return(
            <React.Fragment>
            <h1 className="text-center -b-main-head">BRAIN WAVE</h1>
                <div className="panel-group -b-accrodion" id="accordion">
                    <div className="panel panel-default -b-nav-panel">
                        <div className="panel-heading -b-nav-panel-heading">
                        <h4 className="panel-title  -b-nav-panel-title">
                            <Link to="/">Home</Link>
                        </h4>
                        </div>
                        <div id="home" className="panel-collapse collapse">
                        <div className="panel-body -b-nav-panel-body">
                            <ul className="-b-sidenav-ul">
                                <li><Link to="/">Home</Link></li>
                                <li><a>Lorem ipsum</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="panel panel-default -b-nav-panel">
                    <div className="panel-heading -b-nav-panel-heading">
                        <h4 className="panel-title  -b-nav-panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">About</a>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse">
                        <div className="panel-body -b-nav-panel-body">
                            <ul className="-b-sidenav-ul">
                            {/* <li><Link to="/about">About</Link></li> */}
                            <li><Link to="#">About</Link></li>
                            {/* <li><a>Lorem ipsum</a></li>
                            <li><a>Lorem ipsum</a></li> */}
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="panel panel-default -b-nav-panel">
                        <div className="panel-heading -b-nav-panel-heading">
                        <h4 className="panel-title  -b-nav-panel-title">
                            {/* <Link to="/news">News</Link> */}
                            <Link to="#">News</Link>
                        </h4>
                        </div>
                        <div id="collapse2" className="panel-collapse collapse">
                        <div className="panel-body -b-nav-panel-body">
                            {/* <ul className="-b-sidenav-ul">
                                <li><a>Lorem ipsum</a></li>
                                <li><a>Lorem ipsum</a></li>
                                <li><a>Lorem ipsum</a></li>
                            </ul> */}
                        </div>
                        </div>
                    </div>
                    {/* <div className="panel panel-default -b-nav-panel">
                    <div className="panel-heading -b-nav-panel-heading">
                        <h4 className="panel-title  -b-nav-panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Events</a>
                        </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body -b-nav-panel-body">
                            <ul className="-b-sidenav-ul">
                            <li><a>Lorem ipsum</a></li>
                            <li><a>Lorem ipsum</a></li>
                            <li><a>Lorem ipsum</a></li>
                            </ul>
                        </div>
                    </div>
                    </div> */}
                    <div className="panel panel-default -b-nav-panel">
                        <div className="panel-heading -b-nav-panel-heading">
                            <h4 className="panel-title  -b-nav-panel-title">
                              {/* <Link to="/posts">QA</Link> */}
                              <Link to="#">QA</Link>
                            </h4>
                        </div>
                    </div>
                </div>
        </React.Fragment> 
        );
    }
}
export default Sidenavigation;