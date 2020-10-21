const Client  = require('../models/Client')

/* CRUD OPERATIONS */

// Show the list of Clients
const index = (req, res, next) => {
  Client.find()
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'An errror Occured!'
      })
    })
}

// Show single client
const show = (req, res, next) => {
  let clientID = req.body.clientID
  Client.findById(clientID)
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'An error has occured!'
      })
    })
}

// Add new client
const store = (req, res, next) => {
  let newClient = new Client({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    registrationPlate: req.body.registrationPlate,
    gender: req.body.gender,
    dateBirth: req.body.dateBirth
  })
  if (req.files) {
    let path = ''
    req.files.forEach(function(files, index, arr) {
      path = path + files.path = ','
    })
    path = path.substring(0, path.lastIndexOf(","))
    newClient.avatar = path
  }
  newClient.save()
    .then(response => {
      res.json({
        message: 'New client Added Succesfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!'
      })
    })
}

// Update a client
const update = (req, res, next) => {
  let clientID = req.body.clientID

  let updateData = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: Req.body.age,
    registrationPlate: req.body.registrationPlate,
    gender: req.body.gender,
    dateBirth: req.body.dateBirth
  }

  Client.findByIdAndUpdate(clientID, {$set: updatedData})
    .then(() => {
      res.json({
        message: 'Client updated succesfully!'
      })
      .catch(error => {
        res.json({
          message: 'An error occured!'
        })
      })
    })
}

// Delete a client
const destroy = (req, res, next) => {
  let clientID = req.body.clientID
  Client.findOneAndRemove(clientID)
    .then(() => {
      req.json({
        message: 'Client deleted successfully!'
      })
    })
    .catch(error => {
      req.json({
        message: 'An error occured!'
      })
    })
}

module.exports = {
  index, show, store, update, destroy
}
