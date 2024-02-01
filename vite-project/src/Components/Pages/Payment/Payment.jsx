import React from 'react'
import {Link} from 'react-router-dom'
import { IoAddCircleSharp } from "react-icons/io5";

const Payment = () => {
  const handleDelete=()=>{
    alert("Deleted Payment?!")
  }
  return (
    <div>
      <div className="container -translate-y-[550px]">
      <div className="add ml-[1200px] text-4xl bg-gray-600 text-white rounded-full w-9 space-x-3">
        <Link to='/PostPayment'>
        <IoAddCircleSharp />
        </Link>
      </div>
   <table className='translate-x-[200px]  '>
          <thead className='bg-gray-500 text-white'>
            <tr>
              <th className='w-[130px]'>Payment_id</th>
              <th className='w-[130px]'>Booking_id</th>
              <th className='w-[130px]'>Amount</th>
              <th className='w-[130px]'>PaymentDate</th>
              <th className='w-[130px]'>PaymentMethod</th>
              <th className='w-[130px]'>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-gray-300 translate-y-2 text-gray-700'>
            <tr className=''>
              <td className='text-center'>1</td>
              <td className='text-center'>Miss Esra</td>
              <td className='text-center'>9000</td>
              <td className='text-center'>waysoo dagtay</td>
              <td className='text-center'>single</td>
              <div className="buttons flex text-white">
             <Link to='/UpdatePayment'> <button className='bg-green-600  px-3 border-2 p-1'>Update</button></Link>
            <button className='bg-red-600 px-3 border-2 p-1 ' onClick={handleDelete}>Delete</button>
              </div>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payment