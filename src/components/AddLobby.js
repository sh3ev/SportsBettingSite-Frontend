import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import backend from '../api/betting-backend';



export default class LobbyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  onChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    backend
      .post('/lobbies/',
        { 'name': `${name}` }
      )
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  useStyles() {
    makeStyles(theme => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
      },
      submit: {
        margin: theme.spacing(3, 0, 2)
      }
    }));
  }
  render() {
    const { name } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Add Lobby
        </Typography>
        <form onSubmit={this.onSubmit}>
          <Input
            variant="outlined"
            margin="dense"
            type="text"
            name="name"
            value={name}
            onChange={this.onChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
      </Container>
    );
  }
}
