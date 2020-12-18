import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./pages.css";

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div style={{backgroundColor:"#EAF3FA"}} className="d-flex justify-content-center">
                        <div className="col-6">
                            <div className="text-center">
                                <h3>react-changed-paragraf-type</h3>
                            </div>
                        </div>
                        <div className="col-6">
                            <div  className="text-center">
                                <h3>by <a style={{textDecoration:"none"}} href="https://github.com/mturkben" target="_blank" rel="noreferrer">@mturkben</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div style={{borderTop:"1px solid #EAF3FA"}}  className="navbar-links">
                            <ul style={{listStyle:"none"}} className="d-flex justify-content-center align-items-center">
                                <li> <Link to="/">HOME</Link> </li>
                                <li> <Link to="/add">Add Paragraf Type </Link></li>  
                            </ul>

                        </div>
                    </div>
                <hr className="col-12"/>
                </div>
            </div>
        )
    }
}
export default Navbar;
