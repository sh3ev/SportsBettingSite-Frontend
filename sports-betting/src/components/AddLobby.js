import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import backend from '../api/betting-backend';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

export default class LobbyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  onChange = e => {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
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

  render() {
    const { name } = this.state;
    
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Add lobby
        </Typography>
        <form onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Lobby name"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.onChange}
          />
          <Button fullWidth variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Container>
    );
  }
}
