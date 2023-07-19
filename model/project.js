let mongoose = require('mongoose');

//Create model of project
let ProjectModel = mongoose.Schema(
    {
        "project_title": String,
        "project_description": String,
        "project_deadline": String
    
    },
    {
        collection: "project"
    }
);

module.exports = mongoose.model('Project', ProjectModel);