const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

const db = require('../database/index.js');
const router = require('./router.js');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(passport.initialize());
app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}`));