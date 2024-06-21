const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const router=new express.Router()
const multerConfig=require('../Middlewares/multerMiddleware')
router.post('/register', userController.register);
router.post('/login', userController.login);
// router.post('/contact/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addUserContact);
router.post('/contact/add',jwtMiddleware,multerConfig.single('projectImage'), projectController.addUserContact)
//4 get userproject API routes localhost:4000/projects/all-user-projects //to get projects of logged in user
router.get('/contact/all-user-contacts',jwtMiddleware,projectController.getUserContact)


//5 get dashboard button viewallprojects page routes - localhost:4000/projects/home-projects --for search purpose
router.get('/contact/all-contacts',jwtMiddleware,projectController.getAllContacts)

module.exports=router