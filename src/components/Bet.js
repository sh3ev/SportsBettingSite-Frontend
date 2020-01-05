import React from 'react';
import backend from '../api/betting-backend';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class Bets extends React.Component {
  state = {
    fixture: {},
    error: ''
  };

  useStyles() {
    return makeStyles({
      card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });
  }

  componentDidMount() { //pobranie wyniku meczu po ID zakładu 
    backend.get(`/fixtures/` + this.props.bet.fixtureID).then(res => {
      if (res.status == 400) {
        const error = "You have to be logged in to see your bets!"
        this.setState({ error })
      }
      else {
        const fixture = res.data;
        this.setState({ fixture });
      }

    })
  }

  render() {
    const classes = this.useStyles(); //wpisanie danych do karty 
    if (this.state.error == '') {
      return (
        <div>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {this.state.fixture.homeTeamName} - {this.state.fixture.awayTeamName}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {this.state.fixture.status}
              </Typography>
              <Typography variant="h6" component="h2">
                Result
                        </Typography>
              <Typography variant="body2" component="p">
                {this.state.fixture.score ? this.state.fixture.score : "Not finished"}
              </Typography>
              <Typography variant="h6" component="h2">
                My Bet
                        </Typography>
              <Typography variant="body2" component="p">
                {this.props.bet.fixtureBet}
              </Typography>
            </CardContent>
            {/* <CardActions>
                        <Button size="small">Change bet</Button>
                    </CardActions> */}
          </Card>
        </div>
      );
    }
    else
      return (
        <Card className={classes.card}>
          <CardContent>
            {this.state.error}
          </CardContent>

        </Card>
      )
  }
}  