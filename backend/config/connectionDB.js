const mongoose = require("mongoose");


const uri = "mongodb+srv://shubhamnew:qwertyuiop@second.fgvh1.mongodb.net/foodRecipe?retryWrites=true&w=majority&appName=second"

// const connectDB = async()=>{
//     try{
//         await mongoose.connect(uri)
//         console.log("Connected successfully")
//     }catch(err){
//         console.log(err)
//     }

// }
// connectDB().then(
//     app.listen(5000,()=>{
//         console.log("app listening")
//     })

// ).catch(err=>console.log(err))

const connectDB = async()=>{
    await mongoose.connect(uri)
    .then(()=>{
        console.log("Databases connected")
    })
}


module.exports= connectDB