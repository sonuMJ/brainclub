import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

class Signup extends React.Component{
    state = {
        name: ''
    }
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
                                            <ul className="breadcrumb -b-breadCrumb-signup">
                                                    <li className="active">Login</li>
                                                    <li><a href="#">Sign up</a></li>        
                                                </ul>
                                                <div className="form-group -b-input-group">
                                                    <div className="input-group">
                                                            <input type="text" className="form-control -b-input" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Your Name"/>
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
                                                <div className="form-group -b-input-group">
                                                    <div className="input-group">
                                                            <input type="password" className="form-control -b-input" placeholder="Confirm Password"/>
                                                            <div className="input-group-addon ip-icon">
                                                                <span className="glyphicon glyphicon-lock"></span> 
                                                            </div>
                                                    </div>
                                                </div>
                                                <input type="submit" className="btn btn-primary  -b-btn" value="Sign up" />
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-center -b-signup-link">Already have an Account&nbsp;? <Link to="/login">Login Here</Link></h4>
                        </div>
                        <div className="col-lg-2"></div>
                </div>
            </div>
        )
    }
    handleChange(event){
        console.log(event.target.value);
        this.setState({
            name : event.target.value
        })
    }
}

export default Signup;