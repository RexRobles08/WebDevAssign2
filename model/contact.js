let mongoose = require('mongoose');

//Create model of contact
let ContactModel = mongoose.Schema(
    {
        "name": String,
        "mobile_number": String,
        "email_address": String,
        "message": String
    },
    {
        collection: "contact"
    }
);

module.exports = mongoose.model('Contact', ContactModel);