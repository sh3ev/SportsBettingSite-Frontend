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
            email: ''
        };
    }

    onChange = e => {
        this.setState({ email: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();


        const { email } = this.state;
        backend
            .put(`/lobbies/${this.props.lobbyID}/add`,
                { 'email': `${email}` }
            )
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        this.setState({ email: '' });
        this.props.rerenderParentCallback();
    };

    render() {
        const { email } = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h5" variant="h6">
                    Add user
        </Typography>
                <form onSubmit={this.onSubmit}>
                    <Input
                        variant="outlined"
                        margin="dense"
                        type="text"
                        name="name"
                        value={email}
                        onChange={this.onChange}
                        placeholder="E-mail"
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Add
          </Button>
                </form>
            </Container>
        );
    }
}
