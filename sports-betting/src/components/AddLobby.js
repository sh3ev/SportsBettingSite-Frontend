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


const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default class LobbyForm extends React.Component {

    constructor() {
      super();
      this.state = {
        name: '',

      };
    }
  
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name} = this.state;
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/lobbies',
            data: {name: `${name}`},
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
      }
  
    render() {
      const {name} = this.state;
      return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5">
              Add Lobby
        </Typography>
        <form onSubmit={this.onSubmit}>
          <Input
          variant="outlined"
          margin="normal"
            type="text"
            name="name"
            value={name}
            onChange={this.onChange}
          />
        <Button variant="contained" color="primary" type="submit">Add</Button>
        </form>
        </Container>
      );
    }
  }


