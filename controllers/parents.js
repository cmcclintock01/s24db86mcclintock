var Parent = require('../models/parent');

exports.parent_list = function(req, res) {
    res.send("NOT IMPLEMENTED: Parent list");
};

exports.parent_detail = function(req, res){
    res.send("NOT IMPLEMENTED: Parent detail: " + req.params.id);
};

exports.parent_create_post = function(req, res) {
    res.send("NOT IMPLEMENTED: Parent create POST");
};

exports.parent_delete = function(req, res) {
    res.send("NOT IMPLEMENTED: Parent delete DELETE " + req.params.id);
};

exports.parent_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Parent update PUT' + req.params.id);
};

exports.parent_list = async function(req, res) {
    try {
        theParents = await Parent.find();
        res.send(theParents);
    }
    catch(err){
        res.status(500);
        res.send({"error": ${err}});
    }
};