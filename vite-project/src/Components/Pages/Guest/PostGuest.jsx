import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

const PostEmploye = () => {
  return (
    <div>
       <div className="container -translate-y-[560px] translate-x-[500px] shadow shadow-slate-300 w-[500px]  h-[470px] bg-slate-200">
        <div className='text-4xl'>
                <Link to='/Guest'>
                <IoIosArrowBack />
                </Link>
        </div>
        <h2 className='text-4xl text-center font-bold uppercase'>REgistration Guest</h2>
        <form className=''>
                <input type="text" placeholder='firstName'className='px-5 p-2 mt-2 m-2 outline-none' required />
                <input type="text" placeholder='MiddleName' className='ml-2 px-5 p-2  outline-none' required /> 
                <input type="text" placeholder='LastName' className='px-5 p-2 m-2  outline-none' required /> 
                <input type="text" placeholder='Email' className='ml-2 px-5 p-2  outline-none' required />
                <input type="Number" placeholder='Phone' className='ml-[109px] px-5 p-2 mt-2 outline-none' required />
               
                <input type="submit" className='bg-green-600 px-[205px] p-3 rounded-2xl text-white hover:bg-green-900 font-bold m-2  mt-[100px]' />

        </form>
       </div>
    </div>
  )
}

export default PostEmploye