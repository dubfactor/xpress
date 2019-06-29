const getTableData = (req, res, db) => {
    db.select('*').from('users')
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
          res.json({dataExists: 'RICHARD - No Data!'})
        }
      })
      .catch(err => res.status(400).json({dbError: 'RICHARD - This is a db error'}))
  }
  
  const postTableData = (req, res, db) => {
    const { user_id, first_name, last_name, email, city, zipcode, address, registration_date, phone } = req.body
    //const added = new Date()
    db('users').insert({user_id, first_name, last_name, email, city, zipcode, address, registration_date, phone})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const putTableData = (req, res, db) => {
    const { user_id, first_name, last_name, email, city, zipcode, address, registration_date, phone } = req.body
    db('users').where({id}).update({user_id, first_name, last_name, email, city, zipcode, address, registration_date, phone})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const deleteTableData = (req, res, db) => {
    const { id } = req.body
    db('users').where({id}).del()
      .then(() => {
        res.json({delete: 'true'})
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  module.exports = {
    getTableData,
    postTableData,
    putTableData,
    deleteTableData
  }