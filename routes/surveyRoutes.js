const mongoose = require('mongoose');
const LoginRequired = require('../middlewares/loginRequired');
const CreditRequired = require('../middlewares/creditRequired');
const Mailer = require('../services/Mailer');
const surveyTemplate =require('../services/emailTemplates/surveyTemplate')
const Survey = mongoose.model('surveys');
module.exports=app=>{
    app.get('/api/thanks',(req,res)=>{
        res.send('Thanks for voting');
    })
    app.post('/api/survey',LoginRequired,CreditRequired,async (req,res)=>{
            const {title,subject,body,recipients} = req.body;
            const survey = new Survey({
            title,
            subject,
            body,
            recipients:recipients.split(',').map(email=>({email})),
            _user:req.user.id,
            dateSent:Date.now()
            });            
            const mailer =  new Mailer(survey,surveyTemplate(survey));
            try{
                await mailer.send();
                await survey.save();
                req.user.credits-=1;
                const user= await req.user.save();
                res.send(user);
            }
            catch(err){
                res.status(422).send(err);
                console.log(err)
            }
        
    })
}