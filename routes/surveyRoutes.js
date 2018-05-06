const mongoose = require('mongoose');
const LoginRequired = require('../middlewares/loginRequired');
const CreditRequired = require('../middlewares/creditRequired');
const Mailer = require('../services/Mailer');
const surveyTemplate =require('../services/emailTemplates/surveyTemplate')
const Survey = mongoose.model('surveys');
module.exports=app=>{
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
        await mailer.send();
    })
}