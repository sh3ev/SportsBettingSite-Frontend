import React from 'react';
import backend from '../api/betting-backend';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import { Link } from '@material-ui/core';

export default class Matches extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            name: '', date: '', matches :[ ], bets: ''
          };
    }
    useStyles() {
        return makeStyles(theme => ({
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
                margin: theme.spacing(4, 0, 2)
            },
            pos: {
                marginBottom: 12,
            },
            demo: {
                backgroundColor: theme.palette.background.paper,
            }
        }));
    }
    onNameChange = e => {
        this.setState({ name: e.target.value });
      };
      onDateChange = e => {
        this.setState({ date: e.target.value });
      };
    onBetChange = e => {
        this.setState({ valueBet: e.target.value})
    }
//LEAGUE, DATE
      onSubmit = e => {
        e.preventDefault();
        const { name, date } = this.state;
        backend
          .post('/fixtures',
           {league: name, date: date}
          )
          .then((response) => {
            //handle success
            this.setState({ matches: response.data });
            console.log(response);
          })
          .catch((response)=>{
            //handle error
            console.log(response);
          });
      };
//USER BET
        onSubmit = e => {
            e.preventDefault();
            const { valueBet } = this.state;
            backend
            .post('/users/bets',
            {bet: valueBet}
            )
            .then((response) => {
                //handle success
                this.setState({ bet: response.valueBet });
                console.log(response);
            })
            .catch((response)=>{
                //handle error
                console.log(response);
            });
        };
render() {
    const classes = this.useStyles(); 
    const { name, date, valueBet } = this.state;

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            Search Match
          </Typography>
          <form onSubmit={this.onSubmit}>
            <Input
              variant="outlined"
              margin="dense"
              type="text"
              name="name"
              placeholder="Legue name"
              value={name}
              onChange={this.onNameChange}
            />
            <Input
              variant="outlined"
              margin="dense"
              type="text"
              name="date"
              placeholder="Date YYYY-MM-DD"
              value={date}
              onChange={this.onDateChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Search
            </Button>
          </form>
            {this.state.matches.map(match =>
            <div>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {match.homeTeamName} - {match.awayTeamName}
                  </Typography>
                  <Typography variant="h6" component="h2">
                    Result
                  </Typography>
                  <Typography variant="body2" component="p">
                    {match.score}
                  </Typography>
                  <Input
                    variant="outlined"
                    margin="dense"
                    type="text"
                    name="name"
                    placeholder="Your bet: a-b"
                    value={date}
                    onChange={this.onDateChange}
                    />
                  <Link href={`/fixtures/${this.props.match.params.lobbyId}/${match.fixture_id}`}>SHOW BETS</Link><br/>
                  <Link href={`/fixtures/${this.props.match.params.lobbyId}/${match.fixture_id}`}>BET THIS MATCH</Link>
                </CardContent>
              </Card>
            </div>
             )}
            </Container>
          );
}}