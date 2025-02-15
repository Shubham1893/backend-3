import React from 'react'

// import './App.css'

import './App.css'

import axios from 'axios'

import {createBrowserRouter,RouterProvider} from "react-router-dom"

import AddFoodRecipe from './Pages/AddFoodRecipe'

import Home from "./Pages/Home";
import MainNavigation from './components/MainNavigation';
import EditRecipe from './Pages/EditRecipe'



const getAllRecipes = async()=>{
  
  let allRecipes =[]
  await axios.get("https://backend-3-t3c0.onrender.com/recipe")
  .then(res=>{
    allRecipes = res.data
  })
  return allRecipes;
}

const getMyRecipe = async()=>{
 
  let user = JSON.parse(localStorage.getItem("user"))
  
  if (!user) {
    return []; // Return an empty array if no user is logged in
  }

  let allRecipes = await getAllRecipes()
  // filter out all recipes according to the user login in my recipe on which they post 
  return allRecipes.filter(item=>item.createdBy === user._id)
}




// for return all favourite items 

const getFavRecipes=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}



const router = createBrowserRouter([

  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllRecipes},
    {path:"/myRecipe",element:<Home/>,loader:getMyRecipe},
    {path:"/favRecipe",element:<Home/>,loader:getFavRecipes},
    {path:"/addRecipe",element:<AddFoodRecipe/>},
    {path:"/editRecipe/:id",element:<EditRecipe/>}

  ]}
  
])



export default function App(){
  return (
    <> 
    <RouterProvider router ={router}></RouterProvider>
    </>
  )
}
