
var test = require('supertest'),
    app  = require('../server');

describe('2. GET items test', function(){

    it('2.a Should return 200 status for /todos - HAPPY PATH', function(done){
        test(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })

    it('2.b Should POST -- returning a 200 status code for posting a new item', function(done){
        var todo = { description: 'Complete homework', completed : false};
        test(app)
            .post('/todos')
            .set ('Accept', 'application/json')
            .send(todo)
            .expect(201)
            .expect(/HOMEWORK/i, done);
    });

    it('2.c Should PUT - with a 200 status', function(){
        var todo = {"description": "Test todo - delete me" };

        test(app)
            .post('/todos')
            .set ('Accept', 'application/json')
            .send(todo)
            .end(function(err, res){
                // console.log('res.body is ', res.body)
                if(err){throw err};
                var insertedId = res.body.id;
                // console.log('insertedId is ', insertedId)
                test(app)
                   .put('/todos/'+ insertedId)
                   .expect(201,
                       {
                           description: res.description,
                           completed: !res.isComplete,
                           id: res.id
                       }
                   )
            })
    })

})


// PUT should succeed with appropriate HTTP status
// GET executed immediately after should get the opposite of the todo isComplete status that you had earlier.  
