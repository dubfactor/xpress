I have the following simple api server that only supports POST.
However when I post to it, it doesn't receive it.  What can I do to
make this work properly.  


```
    const app = require('express')()

    var testArray = []

    // CREATE - POST
    app.post('/test', function(req, res){
    let data = req.body && req.body.data
    if(data) {
        let newObj = {
            id: Date.now(), // use time stamp as an id,
            data:  req.body.data,
        } 
        // add the new todo to the testArray
        testArray.push(newObj)
        // set the status code which is sent back 
        // and send the testArray to the client
        res.status(200).send(JSON.stringify(testArray))
    } else {
        res.status(400).send('No data received\n')
    }
    })

    // LISTEN
    app.listen(3000, function(){
        console.log(`Started ToDo API on port 3000`)
    })
```

I use the following curl command to send data (you may use postman if you prefer, but this sample curl would be easier) ...

```
curl --header "Content-Type: application/json"   --request POST   --data '{"data":"xyz"}'   http://localhost:3000/test
```