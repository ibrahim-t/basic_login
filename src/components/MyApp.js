import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./Login"
import HomePage from "./HomePage";
export class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                    </Switch>
                </div>
            </Router>)
    }
}
