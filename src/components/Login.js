import React from "react";
import { login } from "./utils"
import { Redirect } from "react-router"
export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:"hruday@gmail.com",
            password:"hruday123"
        }
    }
    doLogin = () => {
        const result = login(this.state.userName, this.state.password);
        this.setState({ isLoggedIn: result });
    }


    render() {
        return this.state.isLoggedIn ? <Redirect to="/home" /> :
            <div> <input name="username" type="text" value={this.state.userName?this.state.userName:""} onChange={e => this.setState({ userName: e.target.value })} />
                <input name="password" type="password" value={this.state.password ? this.state.password : ""} onChange={e => this.setState({ password: e.target.value })} />
                <button name="loginButton" onClick={() => this.doLogin()}>Login</button>
            </div>

    }
}
