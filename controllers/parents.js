var Parent = require('../models/parent');

exports.parent_list = function(req, res) {
    res.send("NOT IMPLEMENTED: Parent list");
};

exports.parent_detail = async function(req, res){
    console.log("detail" +req.params.id);
    try {
        result = await Parent.findById(req.params.id);
        res.send(result);
    } catch(error) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found}`);
    }
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

exports.parent_delete = async function(req, res) {
    console.log("delete" + req.params.id)
    try {
        result = await Parent.findByIdAndDelete(req.params.id)
        console.log("Removed" + result)
        res.send(result)
    } catch(err){
        res.status(500)
        res.send(`{"error:" Error deleteing ${err}}`);
    }
};

exports.parent_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify.req.body}`);
    try {
        let toUpdate = await Parent.findById(req.params.id);
        if(req.body.parent_type)
            toUpdate.parent_type = req.body.parent_type;
        if(req.body.age) toUpdate.age = req.body.age;
        if(req.body.since) toUpdate.since = req.body.since;
        let result = await toUpdate.save();
        console.log("Success" +result);
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    };
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

exports.parent_view_one_Page = async function(req, res) {
    console.log("single view for id" + req.query.id)
    try {
        result = await Parent.findById(req.query.id)
        res.render('parentdetail',
            {title: 'Parent Detail', toShow: result});
    }
    catch(err) {
        res.status(500)
        res.send(`{'error': ${err}}`);
    }
};

exports.parent_create_Page = function(req, res) {
    console.log("create view")
    try {
        res.render('parentcreate', {title: 'Parent Create'});
    } catch(err) {
        res.status(500)
        res.send(`{error: ${err}}`);
    }
};

exports.parent_update_Page = async function(req, res) {
    console.log("update view for item" + req.query.id)
    try {
        let result = await Parent.findById(req.query.id)
        res.render('parentupdate', {title: 'Parent Update', toShow: result});
    } catch(err){
        res.status(500)
        res.send(`{"error": ${error}}`);
    }
};