import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card';

const Dashboard =()=>{
    return(
        <MuiThemeProvider>
             <Card style={{margin:"4%"}}> 
             <CardTitle title="List of Survey"/>
             </Card>
        </MuiThemeProvider>
    );
}

export default Dashboard;