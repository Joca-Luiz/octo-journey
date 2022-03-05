const express = require('express');
const app =     express();

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../views'));

app.use(express.urlencoded({ extended: false }))

app.use('/public', express.static(path.join(__dirname,'../public')));

const consign = require('consign');
consign()
    .include('content')
    .then('subjects')
    .into(app);

module.exports = app;