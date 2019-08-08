// API BACKEND //MAIN.JS


//GET FUNCTION
const getTableData = (_req, res, db) => {
    db.select('*').from('users_info').limit(5)
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
          res.json({dataExists: 'RICHARD - no data!!!'})
        }
      })
      .catch(err => res.status(400).json({dbError: 'db error RICHARD THIS IS A SELECT DB ERROR', error: err}))
  }
  
  //POST FUNCTION
  const postTableData = (req, res, db) => {
    const { user_id, first_name, last_name, email, city, zipcode, address, registration_date, phone } = req.body
    console.log('req.body in post is ', req.body)
    const added = new Date()
    let { id } = {user_id}

    console.log('id in post is ', req.body.id)

    db('users_info').insert({id, first_name, last_name, email, city, zipcode, address, registration_date, phone, added})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error RICHARD THIS IS A POST DB ERROR'}))
  }
  
  const putTableData = (req, res, db) => {
    const { id, first_name, last_name, email, city, zipcode, address, registration_date, phone } = req.body

    console.log('req.body is ', req.body)
    db('users_info').where({id}).update({id, first_name, last_name, email, city, zipcode, address, registration_date, phone})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error RICHARD THIS IS A PUT DB ERROR'}))
  }
  
  //DELETE FUNCTION
  const deleteTableData = (req, res, db) => {
    const { id } = req.body
    db('users_info').where({id}).del()
      .then(() => {
        res.json({delete: 'true'})
      })
      .catch(err => res.status(400).json({dbError: 'db error RICHARD THIS IS A DELETE DB ERROR'}))
  }
  
  module.exports = {
    getTableData,
    postTableData,
    putTableData,
    deleteTableData
  }