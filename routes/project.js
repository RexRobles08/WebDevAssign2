let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Project = require('../model/project');

//Manage routes
router.get('/', (req, res, next) => {
    Project.find((err, projectList) => {
        if(err){
            return console.error(err);
        }else{
            //console.log(productList);
            res.render('project/list', {title: 'Project List', ProjectList: projectList})
        }
    });
});

// to open ass product page
router.get('/add', (req, res, next) => {
    res.render('project/add', {title: 'Add Project'})
});

//insert product data into mongoDB Collection
router.post('/add', (req, res, next) => {
    //getting data from form
    let newProject = Project({
        "project_title": req.body.ptitle,
        "project_description": req.body.pdescription,
        "project_deadline": req.body.deadline
    });

    //insert data into mongoDB
    Project.create(newProject, (err, Project) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/project')
        }
        });
    });
    
    //Retrieve data from the MongoDB and Open it in View (FORM)
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Project.findById(id, (err, projectToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //write code to display data in View
            console.log("caught request");
            res.render('project/edit', {title : 'Edit Project', project: projectToEdit})
        }

    });
});

/// write code to store updated data into MongoDB
router.post('/edit/:id', (req,res, next) => {
    let id =req.params.id;

    let updateProject = Project({
        "_id": id,
        "project_title": req.body.ptitle,
        "project_description": req.body.pdescription,
        "project_deadline": req.body.deadline

    });

console.log(updateProject);

    Project.updateOne({_id: id}, updateProject, (err) => {
        if (err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/project')
        
        }
    });
});


module.exports = router;
