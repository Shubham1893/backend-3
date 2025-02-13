const express = require("express");
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload } = require("../controller/recipe");
const verifyToken = require("../middleware/auth");

const router  = express.Router()

router.get("/",getRecipes) // routes for get all recipes

router.get("/:id" ,getRecipe) // get recipe by id


// first verify token and then give access to post recipe

router.post("/", upload.single('file'),
verifyToken, addRecipe)  // add recipe

router.put("/:id", upload.single('file'), editRecipe) // for edit recipes

router.delete("/:id",deleteRecipe)  // for deleting recipe

module.exports = router