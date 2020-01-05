import React from 'react';
import backend from '../api/betting-backend';
import Bet from './Bet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';



export default class Bets extends React.Component { //rozszerzenie klasy 
  constructor(props) {
    super(props);
    this.state = {
      bets: [],
      error: ''
    };
  }
  componentDidMount() { //pobranie danych z bazy usera 

    backend.get(`/users/me`).then(res => {
      const bets = res.data.usersBets;
      this.setState({ bets });
      this.setState({ error: "none" })


    }).catch(err => {
      const error = "You have to be logged in to see your bets!";
      this.setState({ error: error })
    });
  }
  useStyles() {
    return makeStyles(theme => ({
      root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    }));

  }
  render() {
    const classes = this.useStyles();
    if (this.state.error === 'none') {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <Typography component="h1" variant="h5">
            My Bets 
          </Typography>
          <Divider variant="middle"/>

          <div>
            {this.state.bets.map(lobby =>
              <div>
                <Typography component="h2" variant="h5">
                  {lobby.lobbyName}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <br/>My total score:{lobby.score}<br/>
                </Typography>
                <div> {lobby.bets.map(b =>
                  <Bet bet={b}></Bet>
                )}</div>
                < Divider variant="middle" />

              </div>
            )}


          </div>
        </Container>
      );
    }
    else if (this.state.error === '') {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <CircularProgress />
        </Container>
      );
    }

    else {
      return (<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5">
          {this.state.error}
        </Typography>
      </Container>)
    }
 }
}