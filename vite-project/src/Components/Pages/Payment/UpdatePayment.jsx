import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

const UpdatePayment = () => {
  return (
    <div>
       <div className="container -translate-y-[560px] translate-x-[500px] shadow shadow-slate-300 w-[500px]  h-[470px] bg-slate-200">
        <div className='text-4xl'>
                <Link to='/Payment'>
                <IoIosArrowBack />
                </Link>
        </div>
        <h2 className='text-4xl text-center font-bold uppercase'>Update Payment</h2>
        <form className=''>
        <input type="number" placeholder='Bookin_id'className='px-5 p-2 mt-2 m-2 outline-none' required />
                <input type="number" placeholder='Amount' className='ml-2 px-5 p-2  outline-none' required /> 
                <input type="Date" placeholder='PaymentDate' className='px-5 p-2 m-2  outline-none' required /> 
             <select className="px-10 p-2 ml-14" >
                <option value="PaymentMethod">PaymentMethod</option>
                <option value="HelloCash">HelloCash</option>
                <option value="Sahay">Sahay</option>
                <option value="Ebirr">Ebirr</option>
                <option value="Esahal">Esahal</option>
                <option value="CBE">CBE</option>
                </select>
                <input type="submit" className='bg-green-600 px-[205px] p-3 rounded-2xl text-white hover:bg-green-900 font-bold m-2  mt-[100px]' />
        </form>
       </div>
    </div>
  )
}

export default UpdatePayment