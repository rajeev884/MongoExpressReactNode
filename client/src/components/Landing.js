import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card';

const Landing =()=>{
    return(
        <MuiThemeProvider>
             <Card style={{margin:"4%"}}> 
                <CardTitle title="Application Name" subtitle="kuch bhi acha sa" />
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
             </Card>
        </MuiThemeProvider>
    );
}

export default Landing;