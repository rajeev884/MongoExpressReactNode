import React ,{Component}from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Header from './Header';
import { connect } from "react-redux";
import * as actions from '../actions'
import Landing from './Landing';
import Dashboard from './Dashboard';
const Surveynew = ()=><h2>surveyyNEW</h2>
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
                    <Route exact path="/surveys/new" component={Surveynew} />
                </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null,actions)(App);