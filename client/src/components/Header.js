import React,{ Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component{
    renderElementRight(){
        switch(this.props.authReducer){
            case null:
                return <div></div>;
            case false:
                return <FlatButton label="Login" href='/auth/google'/>;
            default:
                return <FlatButton label="Logout" href='/api/logout'/>;
        }
    }
    render(){
        return(
            <MuiThemeProvider>
                <AppBar
                    title="AppName"
                    //showMenuIconButton={false}
                    iconElementRight={this.renderElementRight()}
                    />
            </MuiThemeProvider>
        );
    }
}
function mapStateToProps({authReducer}){
    return {authReducer}
}
export default connect(mapStateToProps)(Header);