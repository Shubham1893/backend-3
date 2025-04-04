import React from 'react'

import {useState} from 'react'

import { useLoaderData, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'


import foodRecipe from '../assets/foodRecipe.png'
import bg11 from "../assets/bg1.jpg"
import Recipeitems from '../components/Recipeitems'
import InputForm from '../components/InputForm';
import foody22 from "../assets/sec2.jpg"


export default function Home(){

    const [isOpen,setIsOpen] = useState(false)
    
    const allRecipes = useLoaderData();
    
    const navigate =  useNavigate()


    const addRecipe =()=>{

        // check if token is their or not if toen is their then we will nwvigate
        let token = localStorage.getItem("token")
        if(token){
            navigate("/addRecipe")
        }else{
            setIsOpen(true)
        }
      
    }



    return(
        <>
      
        <section className='home'>
            
        <img src ={bg11} width="100%"  height="100%"></img>    
        <div className ='left'>
            
            <h1 className="boduu1">Food Recipe</h1>
            <h5 className="boduu2" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h5>


            <button onClick={addRecipe}>
                Share Your Recipe
            </button>


        </div>



        <div className='right'>

        {/* <img src ={foodRecipe} width="420px" height ="400px"></img> */}

        </div>

        </section>


        
        
       <div>
       <div className="card"><h1>All Recipes </h1></div>

{(isOpen) &&  <Modal onClose={()=>setIsOpen(false)}><InputForm
      setIsOpen={()=>setIsOpen(false)}
      /></Modal>}

<div className ="recipe">
    
    <Recipeitems recipes ={allRecipes}/>
</div>
       </div>
       
        </>
    )
}


