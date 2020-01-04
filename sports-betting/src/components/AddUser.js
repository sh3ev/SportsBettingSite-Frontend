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
            email: '',
            message: ''
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
            .then((response) => {
                if (response.status === 200) {
                    const newUser = response.data.users.slice(-1)[0].userName;
                    this.setState({ message: `User ${newUser} added correctly!` })
                }
                else
                    this.setState({ message: response.data })

            })
            .catch((err) => {

                this.setState({ message: err.response.data })

            });


    };
    useStyles() {
        return makeStyles(theme => ({
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
                <br />
                {this.state.message}
            </Container>
        );
    }
}
