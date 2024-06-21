const users=require('../Models/userSchema')
const jwt= require('jsonwebtoken')

exports.register = async(req,res)=>{
    console.log("Inside the Register Function");
    const {username,email,password}=req.body
    console.log(`${username} ${email} ${password}`);
    try{
        const existingUser=await users.findOne({email})
    if(existingUser){
        res.status(401).json("User already exist")
    }
    else{
        const newUser=await users({
            username,email,password,mail:"",number:"",profile:""
        })
        await newUser.save()
        res.status(200).json("User register successful")
    }
    }
    catch(err){
        res.status(500).json("server error : "+err.message)
    }
    
    // res.status(200).json("Register request received");
}

exports.login=async(req,res)=>{
    const{email,password}=req.body
    try{
        const user=await users.findOne({email,password})
        if(user){
             const token=jwt.sign({userId:user._id},"superkey2024")
            console.log(token);
            res.status(200).json({user,token})
            // res.status(200).json("Login Successfull")
            
        }
        else{
            res.status(404).json("Invalid Login")
        }
    }
    catch(err){
        res.status(500).json("Server error: "+err.message)
    }
}