import React, { Component } from 'react'

import "./pages.css";
class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div style={{backgroundColor:"#EAF3FA",height:"150px"}} className="position-relative d-flex justify-content-center align-items-center fixed-bottom">
                        <div className="col-12">
                            <div className="text-center">
                                <section>
                                    <span class="title-one">I LOVE GITHUB</span>
                                    <span class="title-two">Welcome!</span>
                                </section>
                            </div>
                        </div>
                    </div>
                <hr className="col-12"/>
                </div>
            </div>
        )
    }
}
export default Footer;