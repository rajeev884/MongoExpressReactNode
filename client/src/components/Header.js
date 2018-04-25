import React,{ Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component{
    render(){
        return(
            <MuiThemeProvider>
                <AppBar
                    title="AppName"
                    //showMenuIconButton={false}
                    iconElementRight={<FlatButton label="Login" />}
                    />
            </MuiThemeProvider>
        );
    }
}

export default Header;