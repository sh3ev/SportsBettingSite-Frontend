import React from 'react';
import {useParams } from 'react-router-dom';
import backend from '../api/betting-backend';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


export default class Fixtures extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            matches:[]
          };
    }
    
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
    componentDidMount() { //pobranie danych z bazy usera 

        backend.get(`/lobbies/${this.props.match.params.lobbyId}/${this.props.match.params.fixtureId}/check`).then(res => {
          const matches = res.data;
             this.setState({ matches });
          this.setState({ error: "none" })
    
    
        }).catch(err => {
          const error = "You have to be logged in to see your bets!";
          this.setState({ error: error })
        });
      }
render() {
    const classes = this.useStyles(); 
        if(this.state.matches === 'Match has not started yet!'){
            return (<h1>Match has not started yet!</h1>)

        }
        let matches = this.state.matches.map(match=> {
        return (
            <Container component="main" maxWidth="xs">
          <CssBaseline />
  
        <div>
          <Typography variant="h5" component="h2">
              User {}
            </Typography>
        <Card className={classes.card}>
          <CardContent>
          <Typography variant="h5" component="h2">
              Match {}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {match.name}
            </Typography>
            <Typography variant="h5" component="h2">
             Comment
                      </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {match.message}
            </Typography>
            <Typography variant="h5" component="h2">
              Bet
                      </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {match.score}
            </Typography>
          </CardContent>
        </Card>
      </div>      </Container>);
    
        });
        return matches; 
    }
}