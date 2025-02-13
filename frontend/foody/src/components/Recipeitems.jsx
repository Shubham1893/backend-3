import React from "react";

import { useState,useEffect } from "react";
import { IoIosStopwatch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios'

import foodImg from '../assets/foodRecipe.png'



import { Link,useLoaderData } from "react-router-dom";





export default function Recipeitems() {

  const recipes = useLoaderData();

  const [allRecipes,setAllRecipes] = useState()

  // if it is my recipe then we will give access to edit my recipes

  let path = window.location.pathname==="/myRecipe" ?true :false

  let favItem = JSON.parse(localStorage.getItem("fav"))??[]
  const [isFavRecipe,setIsFavRecipe] = useState(false)

  console.log(allRecipes);
  


  useEffect(()=>{

  setAllRecipes(recipes)

  },[recipes])


  // ondelete method to delete 
  const onDelete = async(id)=>{
    await axios.delete(`http://localhost:4000/recipe/${id}`)
    .then((res)=>console.log(res))
    setAllRecipes(recipes=>recipes.filter(recipe=>recipe._id !== id))

    let filterItem = favItem.filter(recipe=>recipe._id !==id)
    localStorage.setItem("fav",JSON.stringify(filterItem))
  }



  // for add into favourite recipes
 const favRecipe=(item)=>{

  let filterItem = favItem.filter(recipe=>recipe._id !== item._id)
  favItem = favItem.filter(recipe=>recipe._id === item._id).length===0 ? [...favItem,item] :filterItem
  localStorage.setItem("fav",JSON.stringify(favItem))
  setIsFavRecipe(pre=>!pre)

 }


  return (
    <>
      <div className="card-container">
        {
        allRecipes?.map((item, index) => {
          return(
            <div key ={index} className ='card'>
                <img src ={`http://localhost:4000/images/${item.coverImage}`} width="120px" height ="100px"></img>
                <div className='card-body'>
                    <div className='title'>{item.title}</div>

                    <div className="icons">
                    <div className="timer"> <IoIosStopwatch /> {item.time}</div>

                   { (!path) ? <FaHeart onClick={()=>favRecipe(item)}
                   style={{color:(favItem.some(res=>res._id=== item._id) )? "red" :""}} 
                    />:

                    <div className='action'>

                    <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>


                    <MdDelete onClick={()=>onDelete(item._id)} className='deleteIcon' />

                    </div>
                    
                    }

               </div>    
             </div>   
            </div>
          )
        })}
      </div>
    </>
  );
}
