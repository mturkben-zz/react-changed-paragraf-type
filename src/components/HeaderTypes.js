import React, { Component } from 'react'
import Consumer from "../context";
import ChangedHeader from "./ChangedHeader";
class HeaderTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerValue : ""
        }
    }
    getOptionNumber = async (e) => {
        const getSelection = document.getElementById("inputGroupSelect01").value;
        const headerOption = this.props.value;
        const findArray =  (getId) =>  {
            return getId.id === getSelection;
        }
        const getHeaderValue = await headerOption.find(findArray);
        this.setState({headerValue : getHeaderValue});
    }
    render() {
    return (
      <Consumer>
        {
            value => {
                const { headerTypes } = value;
                return (
                    <div>
                        <div className="input-group my-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Select Header</label>
                            <select className="form-select" id="inputGroupSelect01">
                                <option defaultValue="0">Choose...</option>
                                {
                                    headerTypes.map(header => {
                                        return (
                                            <option value={header.id} key={header.id}>
                                                {header.name}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                            <button className="btn btn-success" onClick={this.getOptionNumber.bind(this)}>SUBMİT</button>
                        </div>
                        <ChangedHeader header={this.state}/>
                    </div>
                );
            }
        }
      </Consumer>
    );
  }
}

export default HeaderTypes;
