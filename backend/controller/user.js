
const User  = require("../models/user")

// const bcrypt = require("bcrypt")
const bcrypt = require('bcryptjs');

const jwt = require("jsonwebtoken")



const userSignUp = async(req,res)=>{

    const {email,password} = req.body;
    

    if(!email || !password){
        return res.status(400).json({message:"Email && password required"})
    }


    // create user find from mail
    let user = await User.findOne({email})
    // check if user already exist then return email is already exist
    if(user){
        return res.status(400).json({error:"Email is already exist"})
    }

    // if user not find then create newuser and storit in to databses
    
    const hashPwd = await bcrypt.hash(password,10)
    const newUser = await User.create({
        email,password:hashPwd
    })

    // generate token using json toke
    // token have three part  1. header 2. paylolad and 3 signature
    let token = jwt.sign({email,id:newUser._id},process.env.SECRET_KEY)

    return res.status(200).json({token,user:newUser})

}





 


const userLogin = async(req,res)=>{
     
    const {email,password} = req.body

    if(!email || !password){
        return  res.status(400).json({message:"Email and password required"})
    }

    let user = await User.findOne({email})

    if(user && await bcrypt.compare(password,user.password)){
        let token = jwt.sign({email,id:user._id},process.env.SECRET_KEY)
        return res.status(200).json({token,user})
    }
    else{

        return res.status(400).json({error:"Invalid credential"})

    }

}







const getUser = async(req,res)=>{
    const user = await User.findById(req.params.id)
    res.json({email:user.email})
}

 


module.exports = {userLogin,userSignUp,getUser}