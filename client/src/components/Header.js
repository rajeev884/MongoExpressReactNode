import React,{ Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from './Payments';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/action/account-balance-wallet';
class Header extends Component{
    renderElementRight(){
        switch(this.props.authReducer){
            case null:
                return <div></div>;
            case false:
                return <FlatButton label="Login" href='/auth/google'/>;
            default:
                return <div>
                        <Payment/>
                        <Badge
                            style={{padding:"5px 0px 8px 9px"}}
                            badgeContent={this.props.authReducer.credits}
                            secondary={true}
                            >
                            <IconButton tooltip="Credit in Wallet">
                                <NotificationsIcon />
                            </IconButton>
                        </Badge>
                        <FlatButton  label="Logout" href='/api/logout'/>
                        </div>;
        }
    }
    
    render(){
        //const Title =()=> <div id="appliTitle"><Link to='/survey'>AppliName</Link></div>;

        return(
            <MuiThemeProvider>
                <AppBar
                 title="AppliName"
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