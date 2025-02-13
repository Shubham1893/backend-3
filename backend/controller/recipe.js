
// to store in database we have to require the model recipes

const Recipes = require("../models/recipe")



//  for uploading image and store it in to storage in backend 
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // stire images in public folder in images folder 
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })





// get recipe by id
// const getRecipes = async(req,res)=>{
//     const recipes = await Recipes.find();
//    res.json(recipes);
// }


// all recipes 

const getRecipes=async(req,res)=>{
  const recipes=await Recipes.find()
  return res.json(recipes)
}



//  get recipes by id 
const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(recipe);
  } catch (error) {
    return res.status(400).json({ message: "Invalid recipe ID" });
  }
};





// adding recipe route 

const addRecipe = async(req,res)=>{

  console.log(req.user)

    const {title,ingredients,instruction,time} = req.body;

    if(!title || !ingredients || !instruction){
        res.json({message:"Required field can't be empty"})
    }

    const newRecipe = await Recipes.create({
        title,ingredients,instruction,time,coverImage:req.file.filename,
        createdBy:req.user.id
    })

    return res.json(newRecipe)
}






const editRecipe = async(req,res)=>{

  const{title,ingredients,instruction,time} = req.body
  let recipe = await Recipes.findById(req.params.id)
  
  try{
    if(recipe){
      let coverImage = req.file?.filename ? req.file?.filename: recipe.coverImage
      await Recipes.findByIdAndUpdate(req.params.id,{...req.body,coverImage},{new:true})
      res.json({title,ingredients,instruction,time})
    }
  }
  catch(err){
    return res.status(404).json({message:"error"})
  }
}






// delete recipe 

const deleteRecipe = async(req,res)=>{

  try{
    
    await Recipes.deleteOne({_id:req.params.id})
    res.json({status:"ok"})

  }
  catch(err){
      return res.status(400).json({meassage:"error"})
  }
}



module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload}