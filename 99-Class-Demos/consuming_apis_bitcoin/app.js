const express = require('express');
const app = express(); 
const request = require('request');
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render('index.ejs', {dataObjectSent: {}});
})

app.post('/', function(req, res) {
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            console.log(data.bpi.USD);
            let rate; 
            if(req.body.currency == 'gbp') {
                rate = data.bpi.GBP
            } else if (req.body.currency == 'eur') {
                rate = data.bpi.EUR
            } else {
                rate = data.bpi.USD
            }
            res.render('index.ejs', {dataObjectSent: rate});
        }
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});