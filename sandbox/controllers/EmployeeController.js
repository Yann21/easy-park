const Employee  = require('../models/Employee')

// Show the list of Employees
const index = (req, res, next) => {
  Employee.find()
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

// Show single employee
const show = (req, res, next) => {
  let employeeID = req.body.employeeID
  Employee.findById(employeeID)
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

// Add new employee
const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age
  })
  employee.save()
    .then(response => {
      res.json({
        message: 'Employee Added Succesfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!'
      })
    })
}

// Update an employee
const update = (req, res, next) => {
  let employeeID = req.body.employeeID

  let updateData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: Req.body.age
  }

  Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
      res.json({
        message: 'Employee updated succesfully!'
      })
      .catch(error => {
        res.json({
          message: 'An error occured!'
        })
      })
    })
}

// Delete an employee
const destroy = (req, res, next) => {
  let employeeID = req.body.employeeID
  Employee.findOneAndRemove(employeeID)
    .then(() => {
      req.json({
        message: 'Employee deleted successfully!'
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
