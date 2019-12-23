import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    button: {
      backgroundColor: '#00a826',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    textField: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sports Betting
            </Typography>
            <Button className={classes.button} variant="contained" >Register</Button>
            <TextField className={classes.textField} label="Username" margin="normal" variant="outlined"/>
            <TextField className={classes.textField} label="Password" margin="normal" variant="outlined"/>
            <Button className={classes.button} variant="contained" disabled>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  