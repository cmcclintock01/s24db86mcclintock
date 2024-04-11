var express = require('express');
const parent_controllers=require("../controllers/parents");
var router = express.Router();

/* GET home page. */
router.get('/', parent_controllers.parent_view_all_Page);
/* Get one parent page*/
router.get('/detail', parent_controllers.parent_view_one_Page);
/*Get create parent page*/
router.get('/create', parent_controllers.parent_create_Page);
/*Get create update page*/
router.get('/update', parent_controllers.parent_update_Page);
/*Get delete parent page*/
router.get('/delete', parent_controllers.parent_delete_Page);



module.exports = router;


