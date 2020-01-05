import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
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
  },
  paper: {
    marginRight: theme.spacing(2),
  },
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

  //grow menu 
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
            <div>
              <MenuIcon
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
              </MenuIcon>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={handleClose}>
                            <Link href="/profile">
                            <Button color="inherit">
                              My Profile
                            </Button>
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link href="/lobby">
                            <Button color="inherit">
                              All lobbies
                            </Button>
                            </Link></MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link href="/addlobby">
                            <Button color="inherit">
                              Add lobby
                            </Button>
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                          <Link href="/bets">
                            <Button color="inherit">
                              My bets
                            </Button>
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                          <Link href="/logout">
                            <Button color="inherit">
                              Log out
                            </Button>
                            </Link>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Sports Betting
          </Typography>
          <Buttons name={localStorage.getItem('name')} />
        </Toolbar>
      </AppBar>
    </div >
  );
}
