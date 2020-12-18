import React, { Component } from "react";
import Consumer from "../context";
import HeaderTypes from "./HeaderTypes";

class HeaderType extends Component {
    render() {
    return (
      <Consumer>
        {
            value => {
                const { headerTypes } = value;
                return(
                  <HeaderTypes value={headerTypes}/>
                );
            }
        }
      </Consumer>
    );
  }
}

export default HeaderType;
