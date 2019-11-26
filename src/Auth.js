import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,    
} from 'react-router-dom';
import {
    Card,
    FormGroup,
    InputGroup,
    Button
} from '@blueprintjs/core';

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <h3 className="bp3-heading">
                    Sign in to Remote Exec
                </h3>
                <Card style={{
                    width: 350,
                    margin: "auto"
                }}>
                    <FormGroup
                        helperText=""
                        labelInfo="(required)"
                    >
                        <InputGroup id="text-input" placeholder="Your email" type="email" />
                    </FormGroup>                    
                    <FormGroup
                        helperText=""
                        labelInfo="(required)"
                    >
                    <InputGroup id="text-input" placeholder="Fill in a password" type="password" />                    
                    </FormGroup>  
                    <div style={{
                        marginBottom: 10
                    }}>
                        <Button intent="primary">
                            Sign In
                        </Button>                                      
                    </div>
                    or
                    <div style={{
                        marginTop: 10
                    }}>
                        <Button icon="git-branch">
                            Login with GitHub
                        </Button>                                                          
                    </div>
                    <p style={{
                        marginTop: 25
                    }}>
                        Forgot your password? <a href="/auth/reset-password">Reset it here.</a>
                    </p>
                </Card>
            </div>
        )
    }
}

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <h3 className="bp3-heading">
                    Sign up with Remote Exec
                </h3>
                <Card style={{
                    width: 350,
                    margin: "auto"
                }}>
                    <FormGroup
                        helperText=""
                        labelInfo="(required)"
                    >
                        <InputGroup id="text-input" placeholder="Your email" type="email" />
                    </FormGroup>                    
                    <FormGroup
                        helperText=""
                        labelInfo="(required)"
                    >
                    <InputGroup id="text-input" placeholder="Fill in a password" type="password" />                    
                    </FormGroup>  
                    <div style={{
                        marginBottom: 10
                    }}>
                        <Button intent="primary">
                            Sign Up
                        </Button>                                      
                    </div>
                    or
                    <div style={{
                        marginTop: 10
                    }}>
                        <Button icon="git-branch">
                            Login with GitHub
                        </Button>                                                          
                    </div>
                </Card>
            </div>                
        )
    }
}

class Auth extends React.Component {
    render() {
        return (
            <div style={{
                textAlign: "center",
                margin: 30
            }}>
                <Router>
                    <Switch>
                        <Route exact path="/auth/sign-in">
                            <SignIn />
                        </Route>
                        <Route exact path="/auth/signup">
                            <SignUp />
                        </Route>                        
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Auth