// import React from 'react'
// import {useState,useEffect} from 'react'
// import Modal from "../components/Modal"
// import InputForm from './InputForm'
// import { NavLink } from 'react-router-dom'




// export default function Navbar(){

//   const [isOpen,setIsOpen] = useState(false)


//   let token = localStorage.getItem("token")
//   const [isLogin,setIsLogin] = useState(token ?false:true)

//   // user
//   let user = JSON.parse(localStorage.getItem("user"))



// //  if everytime token is change then update the 
//   useEffect(()=>{
//     setIsLogin(token ? false :true)
//   },[token])




//   const checkLogin =()=>{

//     // check if token is their or not if their is token then user login  
//     // so if want to logout we rempve token from lpcal storage
//     if(token){
//       localStorage.removeItem("token")
//       localStorage.removeItem("user")
//       setIsLogin(true)
//     }

//     // if token was not there then user want to login so make login pop window opne
//     else{
//       setIsOpen(true)
//     }
   
//   }

//     return(
//       <>
//       <header>
//       <h2>Food blog</h2>
//       <ul>

//       <li><NavLink to="/">Home</NavLink></li>


//       <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={!isLogin ?"/myRecipe":"/"}>My Recipe</NavLink></li>


//       <li onClick={()=> isLogin && setIsOpen(true)}><NavLink to={ !isLogin? "/favRecipe":"/"}>Favourite</NavLink></li>


//       <li onClick={checkLogin}><p className='login'>{(isLogin)?"Login" :"Logout"}{user?.email?`(${user?.email})`:""}</p></li>


//       </ul>
//       </header>

       
//       {(isOpen) &&  <Modal onClose={()=>setIsOpen(false)}><InputForm
//       setIsOpen={()=>setIsOpen(false)}
//       /></Modal>}
//       </>
//     )
// }


import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import InputForm from './InputForm';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let token = localStorage.getItem('token');
  const [isLogin, setIsLogin] = useState(!token);
  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setIsLogin(!localStorage.getItem('token'));
  }, [token]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkLogin = () => {
    if (token) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsLogin(true);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
        <h2 className="nav-title">Food Blog</h2>
        <ul className="nav-links">
          <li className="homee"><NavLink to="/">Home</NavLink></li>
          <li className="myrecipe" onClick={() => isLogin && setIsOpen(true)}><NavLink to={!isLogin ? '/myRecipe' : '/'}>My Recipe</NavLink></li>
          <li className="Favourite" onClick={() => isLogin && setIsOpen(true)}><NavLink to={!isLogin ? '/favRecipe' : '/'}>Favourite</NavLink></li>
          <li onClick={checkLogin} className="login-btn">{isLogin ? 'Login' : `Logout `}</li>
        </ul>
      </header>
      {isOpen && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(245, 237, 237, 0.82);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 5px 60px;
          display: flex;
          align-items: center;
          // justify-content: center;
          width: 1000px;
          min-width: 320px;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        .navbar.hidden {
          transform: translateX(-50%) translateY(-100%);
          opacity: 0;
        }
        .nav-title {
          color: white;
          position:absolute;
          margin-right: 25px;
          font-size: 22px;
          font-weight: bold;
        }
        .nav-links {
          display: flex;
          gap: 50px;
          list-style: none;
        }
        .nav-links li {
          display: inline;
        }
        .nav-links a, .login-btn {
          text-decoration: none;
          color: white;
          
          padding: 10px 15px;
          border-radius: 10px;
          font-weight: 600;
          transition: background 0.3s ease-in-out, transform 0.2s ease;
        }
        .nav-links a:hover, .login-btn:hover {
          background: rgba(0, 0, 0, 0.31);
          transform: scale(1.1);
        }
        .login-btn {
          position:absolute;
          left:850px;
          background: rgba(0, 0, 0, 0.99);
          cursor: pointer;
        }
        
        .myrecipe{
        
        position:absolute;
        left:450px;
        }
        
        .Favourite{
        position:absolute;
        left:600px;
        }
        .homee{
        position:absolute;
        left:340px;
        }
      `}</style>
    </>
  );
}