import React from 'react';
import backend from '../api/betting-backend';
import Bet from './Bet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Bets extends React.Component {
    state = {
      bets: []
    };

    componentDidMount() {
        backend.get(`/users/me`).then(res => {
          const bets = res.data.usersBets;
          this.setState({ bets });
        });
      }

    render() {
        return (
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            Bets
          </Typography>
            <div>
            {this.state.bets.map(bet => 
               (<div>{bet.bets.map(b => 
               (<Bet bet={b}></Bet>)
                )}</div>)
            
            )}
        </div>
         </Container>
        
        );
      }
}  