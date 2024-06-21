// const contacts = require('../Models/projectSchema')
// exports.addUserContact=async(req,res)=>{
//     console.log("Inside AddUserContact");
//      //res.status(200).json("Add user contact request")
//     const userId=req.payload
//     const {name,location,email,number}=req.body
//     projectImage=req.file.filename
//      console.log(projectImage);
//     try{
//         const existingContact=await contacts.findOne({number})
//         if(existingContact){
//             res.status(406).json("Contact already exist")
//         }
//         else{
//             const newContact=new contacts({name,location,email,number,projectImage,userId})
//             await newContact.save()
//             res.status(200).json(newContact)
//         }
//     }
//     catch(err){
//         res.status(404).json({message:err.message})
//     }
// }

const contacts=require('../Models/projectSchema')

//add project Logic

exports.addUserContact=async(req,res)=>{
    console.log("Inside AddUser Contact");
    // res.status(200).json("Add user project request")
    
    //User id get
    const userId=req.payload
    //get add project details

    const {name,location,email,number}=req.body
    //get image
    projectImage=req.file.filename;
    console.log(projectImage);

    //logic of adding new project

    try{

        const existingContact=await contacts.findOne({number})
        if(existingContact){
            res.status(406).json("Contact already exists")
        }
        else{
            const newContact= new contacts({name,location,email,number,projectImage,userId})
        await newContact.save()//save new project details into mongodb
        res.status(200).json(newContact)//send response to client
        }
    }
    catch(err){
        res.status(404).json({message:err.message})

    }
}



exports.getUserContact=async(req,res)=>{
    //get userId
    const userId=req.payload

    //api request
    try{

        const userContact=await contacts.find({userId})
        console.log(userContact);
        res.status(200).json(userContact) //send response to clientt

    }
   
    catch(err){
        res.status(401).json(err.message)
    }
}


//get all contact for searching
exports.getAllContacts=async(req,res)=>{
    //searching code
    // const searchKey=req.query.search
    // const query={
    //     language:{
    //         $regex:searchKey,
    //         $options:"i"
    //     }
    // }

    try{
        const AllContacts=await contacts.find()
        res.status(200).json(AllContacts)
    }
    catch(err){
        res.status(401).json(err.message)
    }
}

