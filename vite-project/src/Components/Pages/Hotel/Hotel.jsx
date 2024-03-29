import React from 'react'
import {Link} from 'react-router-dom'
import { IoAddCircleSharp } from "react-icons/io5";

const Hotel = () => {
  const handleDelete=()=>{
    alert("Deleted!")
  }
  return (
    <div>
      <div className="container -translate-y-[550px]">
      <div className="add ml-[1200px] text-4xl bg-gray-600 text-white rounded-full w-9 space-x-3">
        <Link to='/Post'>
        <IoAddCircleSharp />
        </Link>
      </div>
   <table className='translate-x-[270px]  '>
          <thead className='bg-gray-500 text-white'>
            <tr>
              <th className='w-[140px]'>Hotel_id</th>
              <th className='w-[140px]'>HotelName</th>
              <th className='w-[140px]'>Address</th>
              <th className='w-[140px]'>Email</th>
              <th className='w-[140px]'>Phone</th>
              <th className='w-[140px]'>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-gray-300 translate-y-2 text-gray-700'>
            <tr className=''>
              <td className='text-center'>1</td>
              <td className='text-center'>Avav Hotel</td>
              <td className='text-center'>jigjiga</td>
              <td className='text-center'>Avav@hotmail.com</td>
              <td className='text-center'>+251921236763</td>
              <div className="buttons flex text-white">
             <Link to='/Update'> <button className='bg-green-600  px-3 border-2 p-1'>Update</button></Link>
            <button className='bg-red-600 px-3 border-2 p-1 ' onClick={handleDelete}>Delete</button>
              </div>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Hotel