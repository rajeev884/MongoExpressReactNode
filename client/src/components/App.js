import React ,{Component}from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Header from './Header';
import { connect } from "react-redux";
import * as actions from '../actions'
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component{
    componentDidMount(){
        this.props.fetchusers();
    }
    render(){
        return(
            <div>
                <Header/>
                <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null,actions)(App);