const express =require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const keys =require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./models/users');
require('./services/passportConfig');
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
mongoose.connect(keys.mongoURI);

console.log("...server running at",PORT);
app.listen(PORT);