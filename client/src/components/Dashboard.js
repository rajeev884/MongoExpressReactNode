import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from "react-router-dom";
const Dashboard =()=>{
    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };
    return(
        <MuiThemeProvider>
             <Card style={{margin:"4%"}}> 
             <CardTitle title="List of Survey"/>
             <Link to='/surveys/new'><FloatingActionButton style={style}>
                <ContentAdd />
             </FloatingActionButton></Link>
             </Card>
        </MuiThemeProvider>
    );
}

export default Dashboard;