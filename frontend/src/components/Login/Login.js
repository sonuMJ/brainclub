import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


class Login extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="row -b-login-row">
                                <div className="col-lg-4 -b-login-left_img">
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-1"></div>
                                        <div className="col-lg-10">
                                            <ul className="breadcrumb -b-breadCrumb">
                                                    <li><a href="#">Login</a></li>
                                                    <li className="active">Sign up</li>        
                                                </ul>
                                                <div className="form-group -b-input-group">
                                                    <div className="input-group">
                                                            <input type="text" className="form-control -b-input" placeholder="Your Name"/>
                                                            <div className="input-group-addon ip-icon">
                                                                <span className="glyphicon glyphicon-user"></span> 
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="form-group -b-input-group">
                                                    <div className="input-group">
                                                            <input type="email" className="form-control -b-input" placeholder="Email"/>
                                                            <div className="input-group-addon ip-icon">
                                                                <span className="glyphicon glyphicon-envelope"></span> 
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="form-group -b-input-group">
                                                    <div className="input-group">
                                                            <input type="password" className="form-control -b-input" placeholder="Password"/>
                                                            <div className="input-group-addon ip-icon">
                                                                <span className="glyphicon glyphicon-lock"></span> 
                                                            </div>
                                                    </div>
                                                </div>
                                                <input type="submit" className="btn btn-primary  -b-btn" value="LOGIN" />
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-center -b-signup-link">Don't have an <Link to="/signup">Account&nbsp;?</Link>&nbsp;&nbsp;/&nbsp;&nbsp;Forgot <a>Password&nbsp;?</a></h4>
                        </div>
                        <div className="col-lg-2"></div>
                </div>
            </div>
        )
    }
}

export default Login;