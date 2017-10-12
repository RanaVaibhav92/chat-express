var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName :{type:String,require:true,unique:true},
    lastName : {type:String,require:true},
    gender : {type:String,require:true},
    emailId : {type:String,require:true,unique:true},
    displayName : {type:String,require:true}
}, { versionKey: false })

var User = mongoose.model("User",userSchema);

module.exports = User;