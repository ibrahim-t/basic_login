import React from "react";
import { login } from "./utils"
import { Redirect } from "react-router"
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { reducer } from "./Dashboard/reducer";
import DashboardPage from "./Dashboard/DashboardPage";
const store = createStore(reducer);

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentWillMount() {
        const userInfo = JSON.parse(localStorage.getItem("USER_INFO"))
        if(userInfo){
            this.setState({ isLoggedIn: userInfo.isLoggedIn })
        }
    }

    render() {
        return !this.state.isLoggedIn ? <Redirect to="/login" /> :
            <Provider store={store}> <DashboardPage/></Provider>
    }
}



