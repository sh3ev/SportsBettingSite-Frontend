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
import { Link } from '@material-ui/core';
export default class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.reRender = this.reRender.bind(this);
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
    reRender() {
        this.forceUpdate();
    }



    render() {
        const classes = this.useStyles();
        let users = this.props.users.map(user => {
            return <ListItem key={`${user.userID}+${this.props.lobbyID}`}>
                <ListItemIcon>
                    <AccountCircleIcon color={'primary'} />
                </ListItemIcon>
                <ListItemText
                    primary={user.userName}
                />
            </ListItem>
        })
        if (this.props.users.length == 0)
            users = <ListItem >
                <ListItemIcon>
                    <ClearIcon color={'secondary'} />
                </ListItemIcon>
                <ListItemText
                    primary={'There are no users'}
                />
            </ListItem>

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Name of Lobby
                </Typography>
                    <Typography variant="h5" component="h2">
                        {this.props.lobbyName} <br /> <br />
                    </Typography>
                    <Typography variant="body2" component="div">
                        <Typography variant="h6" className={classes.title}>
                            List of users
                    <div className={classes.demo}>
                                <List >
                                    {users}
                                </List>
                            </div>
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={`/matches/${this.props.lobbyID}`}>
                    <Button size="small">Show more</Button>
                    </Link>
                    <AddUser lobbyID={this.props.lobbyID} rerenderParentCallback={this.reRender} />
                </CardActions>
            </Card>
        );
    }
}
