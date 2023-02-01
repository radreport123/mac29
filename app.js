const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require("path");

const port = process.env.PORT || 3000;


const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  


app.use('/contact', (req, res, next)=> {
    res.send('<h1>hello from contact</h1>');
});

app.use('/', (req, res, next)=> {
    res.send('<h1>hello from node</h1>');
});



app.listen(port, (req, res, next) => {
    console.log('server is started on port 3000');
});




