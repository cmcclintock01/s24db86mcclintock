var express = require('express');
const parent_controllers=require("../controllers/parents");
var router = express.Router();

/* GET home page. */
router.get('/', parent_controllers.parent_view_all_Page);
router.get('/detail', parent_controllers.parent_view_one_Page);
module.exports = router;

