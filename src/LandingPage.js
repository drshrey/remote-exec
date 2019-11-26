import React from 'react'
import {
    Card,
    Button
} from '@blueprintjs/core';


class LandingPage extends React.Component {
    render(){
        return (
            <div style={{
                margin: 30,
                height: "100%",
            }}>
                <h1 style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: 45
                }} className="bp3-heading">
                    Remote Exec
                </h1>
                <br/>
                <h2 style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: 25
                }} className="bp3-heading">
                    Run and monitor shell scripts within Slack.
                </h2>
                <div style={{
                    textAlign: "center",
                    marginTop: 35
                }}>
                    <Card style={{
                        width: 250,
                        height: 125,
                        padding: 15,
                        display: "inline-block",
                        verticalAlign: "top",
                        margin: 15,
                    }}>
                        <p style={{
                            fontSize: 18,
                            textAlign: "center",
                            fontWeight: 500,
                        }}>Development Playground</p>
                        <p style={{
                            textAlign: "center"
                        }}>
                            Develop and test your scripts directly 
                            within our in-browser editor.
                        </p>
                    </Card>
                    <Card style={{
                        width: 250,
                        height: 125,
                        padding: 15,
                        display: "inline-block",
                        verticalAlign: "top",
                        margin: 15,
                    }}>
                        <p style={{
                            fontSize: 18,
                            textAlign: "center",
                            fontWeight: 500,
                        }}>Version Control</p>
                        <p style={{
                            textAlign: "center"
                        }}>
                            Tie a GitHub repository to be your 
                            source of truth for all your scripts.
                        </p>
                    </Card>
                    <Card style={{
                        width: 250,
                        height: 125,
                        padding: 15,
                        display: "inline-block",
                        verticalAlign: "top",
                        margin: 15,                        
                    }}>
                        <p style={{
                            fontSize: 18,
                            textAlign: "center",
                            fontWeight: 500,
                        }}>Streaming Logs & Events</p>
                        <p style={{
                            textAlign: "center"
                        }}>
                            Receive events on your script's status as well
                            as a link to view streaming logs of its execution.
                        </p>
                    </Card>                                                         
                </div>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                    <Button intent="primary" style={{ fontSize: 22, padding: 15 }}>
                        Get Started
                    </Button>                   
                </div>
            </div>
        )
    }
}

export default LandingPage