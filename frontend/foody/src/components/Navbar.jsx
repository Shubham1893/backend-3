import React from 'react'
import {useState,useEffect} from 'react'
import Modal from "../components/Modal"
import InputForm from './InputForm'
import { NavLink } from 'react-router-dom'




export default function Navbar(){

  const [isOpen,setIsOpen] = useState(false)


  let token = localStorage.getItem("token")
  const [isLogin,setIsLogin] = useState(token ?false:true)

  // user
  let user = JSON.parse(localStorage.getItem("user"))



//  if everytime token is change then update the 
  useEffect(()=>{
    setIsLogin(token ? false :true)
  },[token])




  const checkLogin =()=>{

    // check if token is their or not if their is token then user login  
    // so if want to logout we rempve token from lpcal storage
    if(token){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)
    }

    // if token was not there then user want to login so make login pop window opne
    else{
      setIsOpen(true)
    }
   
  }

    return(
      <>
      <header>
      <h2>Food blog</h2>
      <ul>

      <li><NavLink to="/">Home</NavLink></li>


      <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={!isLogin ?"/myRecipe":"/"}>My Recipe</NavLink></li>


      <li onClick={()=> isLogin && setIsOpen(true)}><NavLink to={ !isLogin? "/favRecipe":"/"}>Favourite</NavLink></li>


      <li onClick={checkLogin}><p className='login'>{(isLogin)?"Login" :"Logout"}{user?.email?`(${user?.email})`:""}</p></li>


      </ul>
      </header>

       
      {(isOpen) &&  <Modal onClose={()=>setIsOpen(false)}><InputForm
      setIsOpen={()=>setIsOpen(false)}
      /></Modal>}
      </>
    )
}