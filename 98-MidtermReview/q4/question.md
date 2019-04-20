What is the difference between `req.params` and `req.query`?  Why would you use one instead of the other?  Write simple express.js code that shows how to obtain them from any sample route and console.log their values. Please provide 2 params and 2 query params in your code.

You may test your code using browser, postman or curl.  Curl command provided here ...

`curl localhost:3000/teams/Atlanta%20Falcons/players/Matt%20Ryan`
and
`curl localhost:3000/teams?team=Atlanta&player_name=Matt`


### Solution here please ...

params are actual route parameters and query contains the query(search) parameters.

{
  qs1: 'Atlanta Falcons',
  qs2: 'Matt Ryan'
}

or

{
  param1: 'teams/Atlanta Falcons/players/Matt Ryan'
}


