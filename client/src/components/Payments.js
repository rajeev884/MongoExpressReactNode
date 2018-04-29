import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import * as actions from '../actions'
class Payment extends Component{
    render(){
        return(
            <StripeCheckout
              name="AppliName"
              description="Payment for 5 credits in your wallet"
              amount={500}
              token={token=>this.props.handletoken(token)}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <RaisedButton label="Add Credits" />
            </StripeCheckout>
        );
    }
}
 export default connect(null,actions)(Payment);