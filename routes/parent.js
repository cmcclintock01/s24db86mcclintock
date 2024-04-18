var express = require('express');
const parent_controllers= require("../controllers/parents");
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
};

router.get('/', parent_controllers.parent_view_all_Page);
router.get('/detail', parent_controllers.parent_view_one_Page);
router.get('/create', parent_controllers.parent_create_Page);
router.get('/update', secured, parent_controllers.parent_update_Page);
router.get('/delete', parent_controllers.parent_delete_Page);
module.exports = router;


