Consider the following snippet of MongoDB query code.  Please explain what is happening.

    `db.mycol.find({},{"title":1,_id:0}).limit(2)`

### Solution here please ...
the snippet will find documents with title of 1 and _id of 0.
It will only display a maximum of two (2) documents.
