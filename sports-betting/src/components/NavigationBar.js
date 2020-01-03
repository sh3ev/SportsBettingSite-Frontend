import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    backgroundColor: '#00a826'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  textField: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  }
}));

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  componentDidMount() {
    this.setState({ name: this.props.name })
  }
  render() {
    if (this.props.name)
      return (
        <div>
          Logged as {this.state.name}
        </div>)
    else
      return (<div>
        <Button color="inherit" href="login">
          Sign in
        </Button>
        <Button color="inherit" href="register">
          Sign up
  </Button></div>)
  }


}


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sports Betting
          </Typography>
          <Buttons name={localStorage.getItem('name')} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
