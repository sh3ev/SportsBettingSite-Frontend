import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';



export default class App extends React.Component {
  


  render() {
    return (
      <div className="container">
        <NavigationBar />
      </div>
    );
  }
}

