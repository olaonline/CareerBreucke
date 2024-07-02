const mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true
},
logo:{
    type: String,
    required: false
},
sector:{
    type: String,
    required: false
},
type:{
    type: String,
    required: false
},
location:{
    type: String,
    required: false
},
founded:{
    type: Number,
    required: false
},
})

const companyModel = mongoose.model("Company", companySchema);

module.exports = companyModel;