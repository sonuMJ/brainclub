import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className="-b-footer">
                <div className="container">
                    <div className="row text-center -b-footer-menu">
                        <div className="col-lg-3">
                            <h3>Brain Club</h3>
                            
                        </div>
                        <div className="col-lg-3">
                            <h3>Home</h3>
                            <ul className="-b-footer-ul">
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3>News</h3>
                        </div>
                        <div className="col-lg-3">
                            <h3>Q&A</h3>
                        </div>
                    </div>
                    <hr className="-b-footer-br"/>
                    <div className="text-center">
                        &copy;SOWIBO All rights Reserved
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;