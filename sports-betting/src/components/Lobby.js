import React from 'react';
import backend from '../api/betting-backend';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ClearIcon from '@material-ui/icons/Clear';
import AddUser from './AddUser';
export default class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.takeData = this.takeData.bind(this);
        this.state = {
            users: [],
            userBool: false

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

    takeData() {
        backend.get(`/lobbies/${this.props.lobbyID}/users`).then(res => {
            const users = res.data;
            if (res.status === 200 && users != "This lobby does not have users.")
                this.setState({ users: users, userBool: true });

            else
                this.setState({ users: [{ "name": "There are no users" }] })
        });

    }

    componentDidMount() {
        this.takeData();
    }



    render() {
        const classes = this.useStyles();

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Name of Lobby
                </Typography>
                    <Typography variant="h5" component="h2">
                        {this.props.lobbyName} <br /> <br />
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Typography variant="h6" className={classes.title}>
                            List of users
                    <div className={classes.demo}>
                                <List >


                                    {this.state.users.map(user =>
                                        <ListItem key={`${user._id}+${this.props.lobbyID}`}>
                                            <ListItemIcon>
                                                {this.state.userBool ? <AccountCircleIcon color={'primary'} /> : <ClearIcon color={'secondary'} />}

                                            </ListItemIcon>
                                            <ListItemText
                                                primary={user.name}
                                            />
                                        </ListItem>
                                    )}
                                </List>
                            </div>
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Show more</Button>
                    <AddUser lobbyID={this.props.lobbyID} rerenderParentCallback={this.takeData} />
                </CardActions>
            </Card>
        );
    }
}
