const mongoose    = require('mongoose')
const Schema      = mongoose.Schema

const employeeSchema  = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  age: {
    type: Number
  },
  avatar: {
    type: String
  },
  registrationPlate: {
    type: String
  },
  gender: {
     type: String
  },
  dateBirth: {
     type: String
  }
}, {timestamps: true})

const Client = mongoose.model('Client', clientSchema)
module.exports = Client
