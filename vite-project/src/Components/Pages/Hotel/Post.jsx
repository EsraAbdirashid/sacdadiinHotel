import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

const Post = () => {
  return (
    <div>
       <div className="container -translate-y-[530px] translate-x-[500px] shadow shadow-slate-300 w-[500px]  h-[400px] bg-slate-200">
        <div className='text-4xl'>
                <Link to='/Hotel'>
                <IoIosArrowBack />
                </Link>
        </div>
        <h2 className='text-4xl text-center font-bold uppercase'>REgistration Hotel</h2>
        <form className=''>
                <input type="text" placeholder='HotelName'className='px-5 p-2 mt-2 m-2 outline-none' />
                <input type="text" placeholder='HotelName' className='ml-2 px-5 p-2  outline-none' /> <br />
                <input type="text" placeholder='HotelName' className='px-5 p-2 m-2  outline-none' /> 
                <input type="text" placeholder='HotelName' className='ml-2 px-5 p-2  outline-none' /><br />
                <input type="submit" className='bg-green-600 px-[205px] p-3 rounded-2xl text-white hover:bg-green-900 font-bold m-2  mt-[150px]' />

        </form>
       </div>
    </div>
  )
}

export default Post