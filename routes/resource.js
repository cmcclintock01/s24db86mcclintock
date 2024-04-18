var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var parent_controller = require('../controllers/parents');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

router.post('/parents', parent_controller.parent_create_post);
// DELETE request to delete Parent
router.delete('/parents/:id', parent_controller.parent_delete);
// PUT request to update Paremt.
router.put('/parents/:id', parent_controller.parent_update_put);
// GET request for one Parent.
router.get('/parents/:id', parent_controller.parent_detail);
// GET request for list of all Parent items.
router.get('/parents', parent_controller.parent_list);
module.exports = router;

