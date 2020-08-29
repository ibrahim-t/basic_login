import React from "react";
import { login } from "../utils"
import { Redirect } from "react-router"
import { connect } from "react-redux";
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { doFetchData } from "./actions";
const store = createStore(reducer,applyMiddleware(thunk));

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        if (this.props.onFetchData){
            this.props.onFetchData();
        }
    }
    doLogin = () => {
        const result = login(this.state.userName, this.state.password);
        this.setState({ isLoggedIn: result });
    }

    generateRows=(column,rowData,index )=>{
    	return <tr key={index}>{ column.map(td=><td>{rowData[td]}</td>)}</tr>
    }

    render() { // todo :- styling need to do
        if(this.props.records){
            const column= Object.keys(this.props.records[0]);
          return <div ><table align="center" style={{marginLeft:"auto",marginRight:"auto", marginTop:"15%"}}><tbody className="table=header">{column.map(h=><th>{h}</th>)}
          {this.props.records.map((rd,ind)=>this.generateRows(column,rd,ind))}</tbody></table></div>
        }
        return <div> no data is there!</div>
    }
}
const mapStateToProps = (storeState) => {
    return {
        ...storeState,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData: () => dispatch(doFetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);


