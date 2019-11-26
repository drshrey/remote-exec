import React from 'react'
import {
    Card
} from '@blueprintjs/core';


class LandingPage extends React.Component {
    render(){
        return (
            <div style={{
                margin: 30,
                height: "100vh",
            }}>
                <h1 style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: 45
                }} className="bp3-heading">
                    remote exec
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
                            Tie a Github repository to be your 
                            source of truth.
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
                            as a link to view streaming logs of the script's execution.
                        </p>
                    </Card>                                        
                </div>
            </div>
        )
    }
}

export default LandingPage