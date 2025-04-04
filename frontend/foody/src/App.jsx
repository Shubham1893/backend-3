import React from 'react'

// import './App.css'

import './App.css'

import axios from 'axios'

import {createBrowserRouter,RouterProvider} from "react-router-dom"

import AddFoodRecipe from './Pages/AddFoodRecipe'

import Home from "./Pages/Home";
import MainNavigation from './components/MainNavigation';
import EditRecipe from './Pages/EditRecipe'
import RecipeDetail from "./Pages/RecipeDetail";


const getAllRecipes = async()=>{
  
  let allRecipes =[]
  await axios.get("http://localhost:4000/recipe")
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
    {path:"/editRecipe/:id",element:<EditRecipe/>},
    { path: "/recipe/:id", element: <RecipeDetail /> } 
    

  ]}
  
])



export default function App(){
  return (
    <> 
    <RouterProvider router ={router}></RouterProvider>
    </>
  )
}