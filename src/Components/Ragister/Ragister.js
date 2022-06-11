import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { passwordStrength } from 'check-password-strength'
import Axios from '../Axios/Axios'

function Ragister() {



    const [userName, setuserName] = useState(null)
    const [password, setpassword] = useState(null)
    const [repassword, setrepassword] = useState(null)
    const [email, setemail] = useState(null)

    const submit = () => {
        if(password !== repassword) return alert('password not match')
        if(userName && password && email){
           let validation = passwordStrength(password)
           console.log(validation.id)  
           if(validation.id === 0){
               return alert('password is weak')
           }else{
                Axios.post('/userRegistration',{
                    userName: userName,
                    password: password,
                    email: email    
                }).catch(err => {
                    return alert(JSON.stringify(err.message))
                })
                .then(res => {
                     alert(JSON.stringify(res.data.message))
                })
           }
        } 
        else{
            return alert('please fill all the fields')
        }  
    }



  return (
<div className='h-screen w-full p-5'>
        <div className='h-14 w-fit m-auto'>
            <img className='h-full w-full' src="https://mironmahmud.com/greeny/assets/ltr/images/logo.png" alt=""/>
        </div>
        <div className=' w-full md:w-4/5 m-auto rounded-md mt-10 p-5 flex items-center justify-center flex-col border border-x-white bg-slate-100'>
            <p className=' text-3xl font-bold text-green-600 '>Welcome</p>
            <p className='font-medium text-base mt-2'>Use Your Credentials To Access</p>
            <div className=' w-full flex sm:flex-row flex-col items-center justify-start mt-5'>
                <div className='sm:w-2/4 w-full flex items-center justify-center flex-col '>
                    <div className='h-10 sm:w-4/6 w-full bg-slate-200 rounded-lg mb-2' ><input onChange={(e)=>{setuserName(e.target.value)}} className='pl-3 bg-transparent h-full w-full border-0 outline-none p-1' type="text" placeholder='enter your username' /></div>
                    <div className='h-10 sm:w-4/6 w-full bg-slate-200 rounded-lg mb-2' ><input onChange={(e)=>{setemail(e.target.value)}} className='pl-3 bg-transparent h-full w-full border-0 outline-none p-1' type="email" placeholder='enter your email ' required /></div>
                    <div className='h-10 sm:w-4/6 w-full bg-slate-200 rounded-lg mb-2' ><input onChange={(e)=>{setpassword(e.target.value)}} className='pl-3 bg-transparent h-full w-full border-0 outline-none p-1' type="password" placeholder='enter your password' required /></div>
                    <div className='h-10 sm:w-4/6 w-full bg-slate-200 rounded-lg mb-2' ><input onChange={(e)=>{setrepassword(e.target.value)}} className='pl-3 bg-transparent h-full w-full border-0 outline-none p-1' type="password" placeholder='retype your password' required /></div>
                    <div onClick={submit} className='h-10 sm:w-4/6 w-full flex justify-center bg-green-600 hover:bg-green-700 rounded-md text-white cursor-pointer items-center '> Ragister </div>
                    <p className='text-slate-400 text-center w-5/6'>forgot your password <span className='text-medium text-green-600 text-xs underline cursor-pointer text uppercase '>reset here</span></p>
                </div>
                <div className='sm:w-2/4 w-full flex items-center justify-center flex-col mt-10 sm:mt-0'>
                    <div className='flex items-center justify-center h-10 sm:w-4/6 w-full bg-rose-600 rounded-lg cursor-pointer hover:bg-green-600 duration-200 ease-in mb-2 '>
                        <div className='h-5 w-5'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="" /></div>
                        <p className='text-sm font-medium text-white ml-3'>login with email</p> 
                    </div>
                    <div className='flex items-center justify-center h-10 sm:w-4/6 w-full bg-blue-600 rounded-lg cursor-pointer hover:bg-green-600 duration-200 ease-in mb-2 '>
                        <div className='h-5 w-5'><img className='h-full w-full object-cover' src="https://holyspiritfremont.org/wp-content/uploads/2020/10/facebook-logo.png" alt="" /></div>
                        <p className='text-sm font-medium text-white ml-3'>login with facebook</p> 
                    </div>
                    <div className='flex items-center justify-center h-10 sm:w-4/6 w-full bg-sky-600 rounded-lg cursor-pointer hover:bg-green-600 duration-200 ease-in mb-2 '>
                        <div className='h-5 w-5'><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" /></div>
                        <p className='text-sm font-medium text-white ml-3'>login twitter </p> 
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10 h-13 w-6/5 bg-slate-50 p-5 rounded-lg flex items-center justify-center'>
            <p className='text-bold text-xs '>Have Any Account?<span className='text-green-600 hover:underline cursor-pointer'><Link to="/login" >Login Here</Link></span></p>
        </div>
    </div>
  )
}

export default Ragister