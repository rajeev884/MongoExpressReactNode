import React from 'react';
import TextField from 'material-ui/TextField';

export default ({input,label})=>{
    return(
        <div>
            <TextField
             style={{width:"80%",margin:"0px 33px"}}
             floatingLabelText={label}
             {...input}
            />
            <br/>
        </div>
    );
};