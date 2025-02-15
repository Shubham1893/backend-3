import React from 'react'
import {useState} from 'react'

import axios from 'axios'

export default function InputForm({setIsOpen}){



    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isSignUp,setIsSignUp] = useState(false)
    const [error,setError] = useState("")



    const handleOnSubmit = async(e)=>{
        e.preventDefault()

        // on handle submit we will make post request 
        let  endpoint = (isSignUp) ?"signUp" : "login"

        await axios.post(`https://backend-3-2-f9p5.onrender.com/${endpoint}`,{email,password})
        .then((res)=>{

            // whenever we are post login request it will create token and user and we will store in localstoreage

            localStorage.setItem("token",res.data.token)
            localStorage.setItem("user",JSON.stringify(res.data.user))

            // if setopen then call thi function
            if (setIsOpen) setIsOpen();
        })
        .catch(data=>setError(data.response?.data?.error))
    }
   

    return (
        <>
        <form className = 'form' onSubmit={handleOnSubmit}>

            <div className ="form-control"> 

            <label>Email</label>

            <input type ="email" className='input' onChange ={(e)=>setEmail(e.target.value)} required ></input>
            </div>

            <div className= "form-control">
            <label>Password</label>

            <input type ="password"className='input' 
             onChange={(e)=>setPassword(e.target.value)} required></input>
            </div>

            <button type = "submit">
                {(isSignUp)?"Sign Up" :"Login"}
            </button><br></br>

            
            {/*if error is not empty then we render this  */}
            {(error !=="") && <h6 className='error'> {error}</h6>}


            <p onClick={()=>setIsSignUp(pre=>!pre)}>

                {(isSignUp)?"Already have an Account":"Create new Account"}

            </p>

        </form>
        </>
    )
}
