import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import CssBaseline from '@material-ui/core/CssBaseline';


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline /> 
      { //add your components inside...
        <div className="container">
          <NavigationBar />
        </div>
        }
    </React.Fragment>
      
    );
  }
}

