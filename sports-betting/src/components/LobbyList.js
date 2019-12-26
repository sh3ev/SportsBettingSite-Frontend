import React from 'react';

import axios from 'axios';

export default class LobbyList extends React.Component {
  state = {
    lobbies: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/lobbies`)
      .then(res => {
        const lobbies = res.data;
        this.setState({ lobbies });
      })
  }

  render() {
    return (
      <ul>
        { this.state.lobbies.map(lobby => <li>{lobby.name}</li>)}
      </ul>
    )
  }
}