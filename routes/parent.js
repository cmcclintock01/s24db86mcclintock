var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('parent', { title: 'Search Results' });
  class parent {
    parent_type: String;
    age: Number;
    since: Number;
  }
});

module.exports = router;
