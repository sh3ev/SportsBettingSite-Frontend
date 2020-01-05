import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


class Logout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
        };
        
    }
    
    componentDidMount() {
        localStorage.clear();
        this.id = setTimeout(() => this.setState({ redirect: true }), 3000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
      }
    
      render() {
        return this.state.redirect
          ? <Redirect to="/login" />
          : <div>
              <h1>You have been logged out !!!</h1>
            </div>
      }
}

export default Logout;