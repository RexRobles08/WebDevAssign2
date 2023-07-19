let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Contact = require('../model/contact');

//manage all routes
router.get('/', (req, res, next) => {
    console.log(" go to contact");
    Employees.find((err, contactList) => {
        if(err){
            return console.error(err);
        }else{
            //console.log(contactList);
            res.render('contact/list', {title: 'Contact Info',ContactList:contactList })
        }
    })
});

//to open submit contact page
router.get('/submit', (req,res,next) => {
    res.render('contact/submit', {title: 'Submit Contact'})
});

//to insert contact data into mongoDB collection
router.post('/', (req, res, next) => {
    //getting data from from
    let newContact = Contact({
        "name": req.body.ename, 
        "mobile_number": req.body.enumber,
        "email_address": req.body.eemail,
        "message":req.body.emessage
    });

    console.log("name: ", req.body.ename);

    //insert data into mongoDB
    Contact.create(newContact, (err, Contact) => {
        if(err){
            console.log(err);
            res.end(end);
        }else{
            res.redirect('/')
        }
    });
});

module.exports = router