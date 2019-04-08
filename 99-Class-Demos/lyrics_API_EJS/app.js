const express = require('express');
const app = express();
const request = require('request');

app.use(express.static('public'));

let link = 'https://api.lyrics.ovh/v1'

app.get('/', function(req, res){
    res.render('home.ejs');
});

app.get('/lyricResults', function(req, res){
    let artist = req.query.artist;
    let title = req.query.title;
    let newLink = `${link}/${artist}/${title}`;
    request(newLink, function (error, response, body) {
        let newBody = JSON.parse(body);
        if(response.statusCode !== 200) {
            res.render('error.ejs', {error: newBody.error});
        } else {
        let theLyrics = newBody.lyrics.replace(/\n/gi, '<br>');
        res.render('lyricResults.ejs', {words: theLyrics});
        }
    });
});
    

app.listen(3000, function(){
    console.log('Listening on port 3000');
});