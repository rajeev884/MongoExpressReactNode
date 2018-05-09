import React ,{Component} from 'react';
import { reduxForm , Field} from "redux-form";
import SurveyField from './SurveyField';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import Clear from 'material-ui/svg-icons/content/clear';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card,CardActions} from 'material-ui/Card';
import { Link } from "react-router-dom";

const FIELDS = [{label:'Title',name:'title'},
                {label:'Subject',name:'subject'},
                {label:'Body',name:'body'},
                {label:'Recipients',name:'recipients'}];

class SurveyForm extends Component{
    renderFields(){
        return (
            FIELDS.map(({label,name})=>
                 <Field key={name} label={label} type="text" name={name} component={SurveyField}/>
            )
        );
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                <Card style={{margin:"4% 13%"}}> 
                    <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <CardActions>
                        <Link to='/surveys'><RaisedButton 
                            label="Cancel" 
                            secondary={true}
                            icon={<Clear/>}
                        /></Link>
                        <RaisedButton 
                            label="Next" 
                            type="submit" 
                            primary={true}
                            style={{float:"right"}}
                            icon={<Done />}
                        />
                    </CardActions>
                    </form>
                </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default reduxForm({form:'surveyForm'})(SurveyForm);