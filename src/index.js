import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import appState from './store/store';

ReactDOM.render(
    <Router>
        <Switch>
            {/* 
                Route Tree:
                    Main Layout
                        LandingPage
                        Auth
                            Sign In
                            Register
                        Dashboard
                        Scripts
                            ScriptDetailView
                        Settings
             */}
            {/* Dashboard
                - contains the list of commands with metadata
                on each command
                - contains a quick add command
             */}
            <Route path="/">
                <App appState={appState} />
            </Route>
        </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
