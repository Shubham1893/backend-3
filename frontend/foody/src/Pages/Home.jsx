import React from 'react'

import {useState} from 'react'

import { useLoaderData, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'


import foodRecipe from '../assets/foodRecipe.png'
import Recipeitems from '../components/Recipeitems'
import InputForm from '../components/InputForm';


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
        <div className ='left'>
            <h1>Food Recipe</h1>
            <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable</h5>


            <button onClick={addRecipe}>
                Share Your Recipe
            </button>


        </div>



        <div className='right'>

        <img src ={foodRecipe} width="320px" height ="300px"></img>

        </div>
        </section>
        <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#a2d9ff" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,85.3C384,85,480,107,576,149.3C672,192,768,256,864,272C960,288,1056,256,1152,229.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
        </div>

        {(isOpen) &&  <Modal onClose={()=>setIsOpen(false)}><InputForm
              setIsOpen={()=>setIsOpen(false)}
              /></Modal>}

        <div className ="recipe">
            <Recipeitems recipes ={allRecipes}/>
        </div>
       
        </>
    )
}


