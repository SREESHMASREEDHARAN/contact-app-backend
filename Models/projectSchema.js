const mongoose=require('mongoose')
const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
   
    projectImage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})
const projects = mongoose.model("projects",projectSchema)
module.exports = projects
