import React from 'react';
import './App.css';
import {
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
            text="Sign In" 
            intent="primary"
            style={{ marginRight: 10 }}
          />     
          or
          <Button 
            text="Register" 
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
            <Link to="/"><code>remote exec</code></Link>
          </NavbarHeading>
          <NavbarDivider />
          {this.renderHeaderAuthInformationView()}
        </NavbarGroup>
      </Navbar>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div style={{
        backgroundColor: "#669EFF",
      }}>
        <Header {...this.props} />
        <Switch>
          <Route>
            <LandingPage path="/" />
          </Route>
        </Switch>
        <Card style={{
            padding: 15,
            backgroundColor: "white",
        }}>
          <p>Made in San Francisco.</p>
          <p>Contact <a href="mailto:hello@remote.exec">hello@remote.exec</a> for more info.</p>
        </Card>            
      </div>
    );
  }
}

export default App;
