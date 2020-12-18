import React, { Component } from 'react'

class ChangedHeader extends Component {
    render() {
        if(this.props.header.headerValue === undefined) {
            alert("Please Choose paragraf Type. Is now Undefined");
            return false;
        }
        const {style,paraf} = this.props.header.headerValue;
        console.log(style);
        return (
            <div className="container-fluid p-0 m-0">
                <div style={style}>
                    <p>
                        {paraf}     
                    </p>   
                </div>
            </div>
        );
    }
}
export default ChangedHeader;