import express from 'express';

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
import helmet from 'helmet'; // creates headers that protect from attacks (security)
import { json } from 'body-parser'; // turns response into usable format
import cors from 'cors';  // allows/disallows cross-site communication
import morgan from 'morgan'; // logs requests

// db Connection w/ Heroku
// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

//db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'XpressPractice-1'
  }
});

// Controllers - aka, the db queries
import { getTableData, postTableData, putTableData, deleteTableData } from './controllers/main';

// App creation
const app = express()

// App Middleware
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(helmet())
app.use(cors(corsOptions))
app.use(json())
app.use(morgan('combined')) // use 'tiny' or 'combined'


// App Routes - Auth
app.get('/', (req, res) => res.send('Root Directory app.get command in server.js file'))
app.get('/crud', (req, res) => getTableData(req, res, db))
app.post('/crud', (req, res) => postTableData(req, res, db))
app.put('/crud', (req, res) => putTableData(req, res, db))
app.delete('/crud', (req, res) => deleteTableData(req, res, db))

// App Server Connection porting
app.listen(process.env.PORT || 3001, () => {
  console.log(`app is running on port ${process.env.PORT || 3001}`)
})
