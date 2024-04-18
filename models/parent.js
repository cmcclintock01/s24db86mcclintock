const mongoose = require("mongoose")
const parentSchema = mongoose.Schema( {
    parent_type: String,
    age: {type: Number, min: 12, max: 120},
    since: Number,
})

module.exports = mongoose.model("Parent", parentSchema)
