import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Card,
  Classes,
  Icon
} from '@blueprintjs/core';

import LandingPage from './LandingPage';
import Auth from './Auth';

class Header extends React.Component {
  constructor(props){
    super(props)
  }

  renderHeaderAuthInformationView(){
    if(this.props.appState.user && this.props.appState.user.userName){
      return (
        <div style={{ position: "absolute", right: 25 }}>
          <Button 
            text={"Hi, " + this.props.appState.user.userName}
            icon="user"
          />
        </div>
      )
    } else {
      return (
        <div style={{ position: "absolute", right: 25 }}>
          <Button 
            onClick={() => {window.location.href = '/auth/sign-in'}}
            text="Sign In" 
            intent="primary"
            style={{ marginRight: 10 }}
          />     
          or
          <Button 
            onClick={() => {window.location.href = '/auth/signup'}}
            text="Sign Up" 
            intent="primary"
            style={{ marginLeft: 10 }}            
          />                        
        </div>            
      )
    }
  }

  render() {
    return (
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>
            <Icon icon={"console"} />
            <a 
              style={{
                textDecoration: "none",
                marginLeft: 7,
              }}
            href="/"><code>Remote Exec</code></a>
          </NavbarHeading>
          <NavbarDivider />
          {this.renderHeaderAuthInformationView()}
        </NavbarGroup>
      </Navbar>
    )
  }
}

class NotFound extends React.Component {
  render() {
    return (
      <div style={{
        textAlign: "center"
      }}>
        <h1> 404 Not Found </h1>
        <h3> This page does not exist. Please try again with a different url.</h3>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <div style={{
          backgroundColor: "#48AFF0",
          minHeight: "100vh",
          width: "100%",
          paddingBottom: 15
        }}>
          <Header {...this.props} />
          <Router>
            <Switch>        
              <Route exact path="/" >
                <LandingPage />
              </Route>
              <Route path="/auth">
                <Auth />
              </Route>              
              <NotFound />
            </Switch>
          </Router>                   
        </div> 
        <div style={{
            textAlign: "center",
            backgroundColor: "white",
            width: "100%", 
            height: "100%",
            paddingTop: 20,
            paddingBottom: 20,
        }}>
          <p>Made in San Francisco, California.</p>
          <p>Contact <a href="mailto:hello@remote.exec">hello@remote.exec</a> for more info.</p>
        </div>            
      </div>  
    );
  }
}

export default App;
