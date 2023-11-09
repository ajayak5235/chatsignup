const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const sequelize = require('./util/database')

const app = express()

app.use(bodyParser.json({extended:false}));
app.use(bodyParser.urlencoded({extended: false}));

const userRoutes = require('./router/user-router')

app.use(cors());

app.use(express.json());

const User = require('./model/user-model')

app.use('/user',userRoutes);

sequelize.sync().then(result =>{
    app.listen(4000);
}).catch(err => console.log(err))