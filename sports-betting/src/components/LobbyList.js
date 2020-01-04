import React from 'react';
import backend from '../api/betting-backend';
import Lobby from './Lobby';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default class LobbyList extends React.Component {
  state = {
    lobbies: [],
    users: []
  };

  componentDidMount() {
    backend.get(`/lobbies`).then(res => {
      const lobbies = res.data;
      this.setState({ lobbies });
    });


  }

  render() {
    const classes = this.props;
    if (this.state.lobbies != []) {
      return (
        <React.Fragment>
          <CssBaseline />
          <Container fixed>

            <div className={classes.root}>
              <Grid container spacing={3} justify={'center'} wrap={'wrap'}>
                {this.state.lobbies.map(lobby =>
                  <Grid item xl={5} key={lobby._id}>
                    <Paper className={classes.paper}><Lobby lobbyName={lobby.name} lobbyID={lobby._id} /></Paper>
                  </Grid>
                )}
              </Grid>
            </div>
          </Container>
        </React.Fragment>
      );
    }
  }
}
