import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import LobbyList from './components/LobbyList';


const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/lobby" component={LobbyList} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
