const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const LoginRequired = require('../middlewares/loginRequired');
module.exports=app=>{
    app.post('/api/stripe',LoginRequired, async (req,res)=>{
        const charge = await stripe.charges.create({
            amount:500,
            currency:'usd',
            description:'Payment for 5 credits in your wallet',
            source:req.body.id
        });
        req.user.credits+=5;
        const user = await req.user.save();
        res.send(user);
    });
}