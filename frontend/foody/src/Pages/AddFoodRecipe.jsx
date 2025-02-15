import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'




// for uploading image we use library multer 

export default function AddFoodRecipe(){

    const [recipeData,setRecipeData]= useState({})

    const navigate = useNavigate()





    
    // defining a method 
    const onHandleChange =(e)=>{

        console.log(e.target.files ? e.target.files[0] : "No file selected");


       let val = (e.target.name === "ingredients")? e.target.value.split(",") :(e.target.name=== "file" && e.target.files) ?e.target.files[0] :e.target.value;

       setRecipeData(pre=>({...pre,[e.target.name]:val}))

    }
 
 



    // creating method for onHandleSubmit
    const onHandleSubmit= async (e)=>{
        e.preventDefault()
        console.log(recipeData) 
        await axios.post("https://backend-3-2-f9p5.onrender.com/recipe",recipeData,{
            headers:{
                'Content-Type':'multipart/form-data',
               'authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
        .then(()=>navigate("/"))

        .catch((err) => console.error(err.response.data)); 
    }






     
    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>

                    <div className='form-control'>

                        {/* title */}
                        <label>Title</label>

                        <input type="text" className='input' name="title" onChange={onHandleChange}></input>

                    </div>
                    <div className='form-control'>
                        
                        {/* time */}
                        <label>Time</label>

                        <input type="text" className='input' name="time" onChange={onHandleChange}></input>

                    </div>
                    <div className='form-control'>

                        {/*ingredient  */}
                        <label>Ingredients</label>

                        <textarea type="text" className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange}></textarea>

                    </div>

                    <div className='form-control'>
                        
                        {/* instruction */}
                        <label>Instructions</label>

                        <textarea type="text" className='input-textarea' name="instruction" rows="5" onChange={onHandleChange}></textarea>

                    </div>
                    <div className='form-control'>
                        
                        {/* recipes image */}
                        <label>Recipe Image</label>

                        <input type="file" className='input' name="file" onChange={onHandleChange}></input>

                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
            </div>
        </>
    )
}
