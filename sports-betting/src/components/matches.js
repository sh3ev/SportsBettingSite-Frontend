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
            name: '', date: '', matches :[ //sztywne dane
                {
                    "_id": "5e0f56cbb67d650017c72ef1",
                    "league_name": "Ekstraklasa",
                    "fixture_id": 154454,
                    "homeTeamName": "Arka Gdynia",
                    "awayTeamName": "Cracovia Krakow",
                    "score": "5-2",
                    "date": "2020-02-07T00:00:00+00:00",
                    "status": "Time to be defined",
                    "__v": 0
                },
                {
                    "_id": "5e0f56cbb67d650017c72ef2",
                    "league_name": "Ekstraklasa",
                    "fixture_id": 154455,
                    "homeTeamName": "Korona Kielce",
                    "awayTeamName": "Gornik Zabrze",
                    "score": "3-4",
                    "date": "2020-02-07T00:00:00+00:00",
                    "status": "Time to be defined",
                    "__v": 0
                },
                {
                    "_id": "5e0f56cbb67d650017c72ef3",
                    "league_name": "Ekstraklasa",
                    "fixture_id": 154456,
                    "homeTeamName": "Lech Poznan",
                    "awayTeamName": "Raków Częstochowa",
                    "score": "1-1",
                    "date": "2020-02-07T00:00:00+00:00",
                    "status": "Time to be defined",
                    "__v": 0
                },
                {
                    "_id": "5e0f56cbb67d650017c72ef4",
                    "league_name": "Ekstraklasa",
                    "fixture_id": 154457,
                    "homeTeamName": "Legia Warszawa",
                    "awayTeamName": "ŁKS Łódź",
                    "score": "3-2",
                    "date": "2020-02-07T00:00:00+00:00",
                    "status": "Time to be defined",
                    "__v": 0
                },
                {
                    "_id": "5e0f56cbb67d650017c72ef5",
                    "league_name": "Ekstraklasa",
                    "fixture_id": 154458,
                    "homeTeamName": "Piast Gliwice",
                    "awayTeamName": "Zaglebie Lubin",
                    "score": "0-0",
                    "date": "2020-02-07T00:00:00+00:00",
                    "status": "Time to be defined",
                    "__v": 0
                },
                {
                    "_id": "5e0f56cbb67d650017c72ef6",
                    "league_name": "Ekstraklasa",
                    "fixture_id": 154459,
                    "homeTeamName": "Slask Wroclaw",
                    "awayTeamName": "Lechia Gdansk",
                    "score": "2-1",
                    "date": "2020-02-07T00:00:00+00:00",
                    "status": "Time to be defined",
                    "__v": 0
                },
                {
                    "_id": "5e0f56cbb67d650017c72ef8",
                    "league_name": "Ekstraklasa",
                    "fixture_id": 154461,
                    "homeTeamName": "Wisla Plock",
                    "awayTeamName": "Pogon Szczecin",
                    "score": "3-3",
                    "date": "2020-02-07T00:00:00+00:00",
                    "status": "Time to be defined",
                    "__v": 0
                },
                {
                    "_id": "5e0f56cbb67d650017c72ef7",
                    "league_name": "Ekstraklasa",
                    "fixture_id": 154460,
                    "homeTeamName": "Wisla Krakow",
                    "awayTeamName": "Jagiellonia",
                    "score": "2-2",
                    "date": "2020-02-07T00:00:00+00:00",
                    "status": "Time to be defined",
                    "__v": 0
                }
            ]
          };
    }
    // useStyles() {
    //     return makeStyles({
    //       card: {
    //         minWidth: 275,
    //       },
    //       bullet: {
    //         display: 'inline-block',
    //         margin: '0 2px',
    //         transform: 'scale(0.8)',
    //       },
    //       title: {
    //         fontSize: 14,
    //       },
    //       pos: {
    //         marginBottom: 12,
    //       },
    //     });
    //   }
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
    
      onSubmit = e => {
        e.preventDefault();
        const { name, date } = this.state;
        backend
          .post('/fixtures',
           {league: name, date: date}
          )
          .then(function (response) {
            //handle success
            // this.setState({ matches: response });
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
      };
render() {
    const classes = this.useStyles(); 
    const { name, date } = this.state;

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
              value={name}
              onChange={this.onNameChange}
            />
            <Input
              variant="outlined"
              margin="dense"
              type="text"
              name="date"
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
                  <Link href={`/fixtures/${this.props.match.params.lobbyId}/${match.fixture_id}`}>SHOW BETS</Link>
                </CardContent>
              </Card>
            </div>
             )}
            </Container>
          );
}}