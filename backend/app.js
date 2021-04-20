const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const userRoutes = require('./routes/users')
const forumRoutes = require('./routes/forums')
const postsRoutes = require('./routes/posts')
const investmentClubRoutes = require('./routes/investmentClub')
const commentRoutes = require('./routes/comments')


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://sahilkanojia:'+
    'Softwareji' +
    '@cluster0-szcya.mongodb.net/test?retryWrites=true',

    {
        useMongoClient : true,
        useFindAndModify : false,
        useCreateIndex: true ,
        useNewUrlParser: true
    })



//For CORS error
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method == "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT ,POST ,DELETE,GET,PATCH')
        return res.status(200).json({})
    }
    next();
})

app.use('/users', userRoutes);
app.use('/forums', forumRoutes);
app.use('/investment-club', investmentClubRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentRoutes);


// for routes not found
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
})

module.exports = app