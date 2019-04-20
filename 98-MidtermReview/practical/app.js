var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/results', function(req, res) {
    var movie = req.query.movie;

    request('http://www.omdbapi.com/?apikey=1d3975f&s=' + movie, function(error,response,body) {
        var data = JSON.parse(body);
        console.log(body);
        // var title = data.results[0].original_title;
        res.render('results.ejs', {data: data});

        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
});

app.listen(3000, function() {
    console.log("Movies backend running on port 3000");
});