import React, { Component } from 'react';


const ContextApi = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTypes : []
    }
  }
    componentDidMount = () => {
       this.dataFetch();
    }
    dataFetch = () => {
        fetch("http://localhost:3050/headerTypes", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
              this.setState({
                headerTypes : res
              });
          })
          .catch((err) => console.log(err));
      };
    render() {
        return (
            <ContextApi.Provider value={this.state}>
                {this.props.children} 
            </ContextApi.Provider>
        )
    }
}
const HeaderConsumer = ContextApi.Consumer;
export default HeaderConsumer;
