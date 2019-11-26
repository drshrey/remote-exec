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
            <a 
              style={{
                textDecoration: "none",
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
      <div style={{
        backgroundColor: "#48AFF0",
        position: "absolute",
        height: "100%",
        width: "100%",
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
        <Card style={{
            padding: 15,
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
        }}>
          <p>Made in San Francisco.</p>
          <p>Contact <a href="mailto:hello@remote.exec">hello@remote.exec</a> for more info.</p>
        </Card>            
      </div>
    );
  }
}

export default App;
