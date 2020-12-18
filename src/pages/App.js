import React, { Component } from 'react'
import {BrowserRouter as Router , Route, Switch } from "react-router-dom";
import HeaderType from "../components/HeaderType";
import Navbar from "../parts/Navbar";
import Footer from "../parts/Foooter";
import NotFound from "./NotFound";
import AddHeader from "./AddHeader";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navbar/>
          <Switch>
            <Route exact path="/"  component={HeaderType}/>
            <Route exact path="/add" component={AddHeader}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}
export default App;