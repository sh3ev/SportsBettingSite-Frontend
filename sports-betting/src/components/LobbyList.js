import React from 'react';
import backend from '../api/betting-backend';

export default class LobbyList extends React.Component {
  state = {
    lobbies: []
  };

  componentDidMount() {
    backend.get(`/lobbies`).then(res => {
      const lobbies = res.data;
      this.setState({ lobbies });
    });
  }

  render() {
    return (
      <ul>
        {this.state.lobbies.map(lobby => (
          <li>{lobby.name}</li>
        ))}
      </ul>
    );
  }
}
