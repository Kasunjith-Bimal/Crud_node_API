const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const employeeSchema = mongoose.Schema({
    employeeName: String,
    employeeSchool: String
});

module.exports = mongoose.model('Employee', employeeSchema);