import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'




// for uploading image we use library multer 

export default function EditRecipe(){

    // const [recipeData,setRecipeData]= useState({})
    const [recipeData, setRecipeData] = useState({
        title: "",
        ingredients: "",
        instruction: "",
        time: "",
        file: null
    })

    const navigate = useNavigate()

    const {id}  = useParams()

    useEffect(()=>{
        const getData = async()=>{
            await axios.get(`https://backend-3-t3c0.onrender.com/recipe/${id}`)
            .then(response=>{
                let res = response.data
                setRecipeData({
                    title:res.title,
                    ingredients:res.ingredients.join(","),
                    instruction:res.instruction,
                    time:res.time
                })
            })
        }
        getData()
    },[])
     


    
    // defining a method 
    const onHandleChange =(e)=>{

         

       let val = (e.target.name === "ingredients")? e.target.value.split(",") :(e.target.name=== "file" && e.target.files) ?e.target.files[0] :e.target.value;

       setRecipeData(pre=>({...pre,[e.target.name]:val}))

    }
 
 



    // creating method for onHandleSubmit
    const onHandleSubmit= async (e)=>{
        e.preventDefault()
        console.log(recipeData) 
        await axios.put(`https://backend-3-t3c0.onrender.com/recipe/${id}`,recipeData,{
            headers:{
                'Content-Type':'multipart/form-data',
               'authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
        .then(()=>navigate("/myRecipe"))

        .catch((err) => console.error(err.response.data)); 
    }






     
    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>

                    <div className='form-control'>

                        {/* title */}
                        <label>Title</label>

                        <input type="text" className='input' name="title" onChange={onHandleChange}  value={recipeData.title}></input>

                    </div>
                    <div className='form-control'>
                        
                        {/* time */}
                        <label>Time</label>

                        <input type="text" className='input' name="time" onChange={onHandleChange} value ={recipeData.time}></input>

                    </div>
                    <div className='form-control'>

                        {/*ingredient  */}
                        <label>Ingredients</label>

                        <textarea type="text" className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange} value ={recipeData.ingredients}></textarea>

                    </div>

                    <div className='form-control'>
                        
                        {/* instruction */}
                        <label>Instructions</label>

                        <textarea type="text" className='input-textarea' name="instruction" rows="5" onChange={onHandleChange} value ={recipeData.instruction}></textarea>

                    </div>
                    <div className='form-control'>
                        
                        {/* recipes image */}
                        <label>Recipe Image</label>

                        <input type="file" className='input' name="file" onChange={onHandleChange}></input>

                    </div>
                    <button type="submit">Edit Recipe</button>
                </form>
            </div>
        </>
    )
}
