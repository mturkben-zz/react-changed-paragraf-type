import React, { Component } from "react";
import Consumer from "../context";

class AddHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      paraf:"",
      style:"",
      error: false
    }
  }
  validateForm =  () => {
    const {name,paraf,style} = this.state;
    if(name === "" || paraf === "" || style === "") {
      return false;
    }
    return true;
  }
  getDataBase = async (e) => {
      await this.getJsonParse();
      await this.addDataType(e);
  }
  getJsonParse = () => {
      try {
        const styles =  this.state.style;
        this.setState({
          style:JSON.parse(styles)
        })
      } catch (err) {
        console.log(err);
      }
  }
  addDataType = async (e) => {
    e.preventDefault();
    const {name,paraf,style} = this.state;
    if(!this.validateForm()) {
      this.setState({
        error:true
      })
      return;
    }
    await fetch("http://localhost:3004/headerTypes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,
        paraf,
        style,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      this.props.history.push("/add");
  }
  render() {
    const {error} = this.state;
    return (
      <Consumer>
        {
          value => {
            const {dispatch} = value;
            return (
              <div className="container">
                <div className="row">
                  <div className="card p-0 m-0">
                    <div className="card-header">
                      Add New Paragraf Type
                    </div>
                    <div className="card-body">
                    {
                        error ? 
                        <div className="alert alert-danger">
                        Please Check Your Information.
                        </div>
                        :
                        null
                      }
                      <form onSubmit={this.getDataBase.bind(this)}>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                          <div className="col-12 col-lg-6 my-2">
                            <input type="text" className="input-group-text form-control w-100" placeholder="Add Name..." 
                            onChange={(e) => this.setState({name:e.target.value})}
                            value={this.state.name}
                            />
                          </div>
                          <div className="col-12 col-lg-6 my-2">
                            <textarea className="input-group-text form-control w-100" placeholder="Add Paragraf..."
                            onChange={(e) => this.setState({paraf:e.target.value})}
                            value={this.state.paraf}
                             ></textarea>
                          </div>
                          <div className="col-12 col-lg-6 my-2">
                            <textarea className="form-control w-100" placeholder="Add Style..." rows="10"
                            onChange={(e) => this.setState({style:e.target.value})}
                            value={this.state.style}></textarea>
                          </div>
                          <div className="col-12 col-lg-6 my-2">
                            <input type="submit" className="btn btn-success w-100" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }
      </Consumer>
    );
  }
}
export default AddHeader;
