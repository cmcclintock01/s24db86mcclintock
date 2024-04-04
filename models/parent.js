const mongoose = require("mongoose")
const parentSchema = mongoose.Schema( {
    parent_type: String,
    age: Number,
    since: Number,
})

module.exports = mongoose.model("Parent", parentSchema)
