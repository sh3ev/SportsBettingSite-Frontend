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
      fixture:{}
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
      });}
    
    componentDidMount() {
        backend.put(`/fixtures/`+this.props.bet.fixtureID).then(res => {
          const fixture = res.data;
          this.setState({ fixture });
        });
      }

    render() {
        const classes = this.useStyles();
        return (
            <div>
           <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {this.state.fixture.homeTeamName} - {this.state.fixture.awayTeamName}
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
        {this.state.fixture.status}
        </Typography>
        <Typography  className={classes.pos} color="textSecondary">
       Score
        </Typography>
        <Typography variant="body2" component="p">
        {this.state.fixture.score ? this.state.fixture.score : "Not finished"}
        </Typography>
        <Typography  className={classes.pos} color="textSecondary">
        My Bet
        </Typography>
        <Typography variant="body2" component="p">
        {this.props.bet.fixtureBet}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Change</Button>
      </CardActions>
    </Card>
          </div>
        
        );
      }
}  