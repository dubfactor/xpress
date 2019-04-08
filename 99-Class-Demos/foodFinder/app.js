// generates an express instance
const express = require('express');
const app = express();

// requires yelp-fusion
const yelp = require('yelp-fusion');
const yelpClientId = 'QSuhH6NbpAijE1bdJqHsew';
const apiKey = 'TGmj7XiFfyILe004o67z3COKqqat0-RPorHfIepxlF1mCRCUBSy7gIwcUJaATMMO0c0MIeINi8qbQ44tWt-yYsYk2aWto0n0GrDyjQ0A7Jft5ZV6xRTJDGPNckAgW3Yx';
const client = yelp.client(apiKey);


// directs searches to public folder
app.use(express.static('public'));

// route handlers go here

app.get('/', function(req, res){
    res.render('home.ejs');
});

app.get('/locationSearch', function(req, res){
    console.log('this is : ' + req.query.locale);
    client.search({
        location: req.query.locale,
        sort_by: 'distance',
        limit: 10
    }).then(response => {
        let results = response.jsonBody.businesses;
        res.render('searchResults.ejs', {results: results, location: req.query.locale});
    }).catch(e => {
        res.render('error.ejs', {error: 'There has been an error. Please try again.'});
    }); 
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});