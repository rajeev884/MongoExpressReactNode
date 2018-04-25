import React ,{Component}from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Header from './Header';
import { connect } from "react-redux";
import * as actions from '../actions'

const Landing = ()=><div>bcdjvj</div>
class App extends Component{
    componentDidMount(){
        this.props.fetchusers();
    }
    render(){
        return(
            <div>
                <Header/>
                <BrowserRouter>
                    <Route path="/" component={Landing} />
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null,actions)(App);