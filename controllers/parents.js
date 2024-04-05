var Parent = require('../models/parent');

exports.parent_list = function(req, res) {
    res.send("NOT IMPLEMENTED: Parent list");
};

exports.parent_detail = async function(req, res){
    console.log("detail" +req.params.id)
    try {
        result = await Parent.findById(req.params.id)
        res.send(result)
    } catch (
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found}`);
    )
};

exports.parent_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Parent();
    document.parent_type = req.body.parent_type;
    document.age = req.body.age;
    document.since = req.body.since;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
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
        res.send(`{"error": ${err}}`);
    }
};

exports.parent_view_all_Page = async function (req, res) {
    try{
        theParents = await Parent.find();
        res.render('parent', { title:'Parent Search Results', results: theParents});
    }
    catch(err){
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};