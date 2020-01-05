import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import LobbyList from './components/LobbyList';
import Login from './components/Login';
import Register from './components/Register';
import AddLobby from './components/AddLobby';
import Bets from './components/Bets';
import Matches from './components/matches';
import Fixtures from './components/Fixtures';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/lobby" component={LobbyList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/addlobby" component={AddLobby} />
        <Route path="/bets" component={Bets} />
        <Route path={"/matches/:lobbyId"} component={Matches} />
        <Route path={"/fixtures/:lobbyId/:fixtureId"} component={Fixtures} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
