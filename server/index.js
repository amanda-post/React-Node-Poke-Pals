const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/index.js');
const cors = require('cors');
const firebase = require('../init-firebase.js')

const router = require('./router.js')

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/api', router)

app.listen(port, () => console.log(`Listening on port ${port}`));

// var admin = require('firebase-admin');