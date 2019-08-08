var express = require('express')
var app = express()

var pg = require('pg')
const { Client } = pg

var cors = require('cors')
app.use(cors())

let connectionObject = {
    host : "pgdb.accsoftwarebootcamp.com",
    database : "accsoftwarebootcamp",
    port : 5432,
    user : "xpress",
    password : "xpress_rocks_2019"
 }

 const client = new Client(connectionObject);

 client.connect()
   .then(function() {
       console.log(`API successfully Connected to ${client.database} dB`);
   })
   .catch(function(err) {
       console.error('PG Connection error', err.stack)
   });

var vehicles = [
    {nickname: "my top car", make: "Benz"},
    {nickname: "my everyday car", make: "Honda"}
]

app.get('/', function(req, res){
    res.send('You have reached my most marvelous API')
})

app.get('/vehicles/:userid', function(req, res){
    let userid = req.params.userid;
    let query =`SELECT u.user_id, v.*
                FROM vehicle as v 
                JOIN user_vehicle as uv USING (vehicle_id)
                JOIN users as u ON (u.user_id = uv.user_id)
                WHERE u.user_id = ${userid};`
    
    console.log('query is ', query)

    client.query(query, function(err, vehicles) {
        if(err) {
            console.log('Error: ', err);
            res.status(400).send({code: 1234, message: 'Error: ' + err});
        };
        res.json(vehicles.rows)
    })
})

app.listen(3001, function(){
    console.log('xpress api server started on port 3000')
})