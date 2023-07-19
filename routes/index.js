var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', username:'' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Project' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/*
// insert name to the home page
router.post('/contact', (req, res, next) => {
  //getting data from form
  let newName =req.body.name;

  console.log('sdfghjklghjkl;fghjkl;fghjkl ',newName)
  res.render('index', {title : 'home' , username : 'Hi ' +newName+', '})
});
*/
module.exports = router;
