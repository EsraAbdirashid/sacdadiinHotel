import React from 'react'
import {Link} from 'react-router-dom'
import { IoAddCircleSharp } from "react-icons/io5";

const RoomType = () => {
  const handleDelete=()=>{
    alert("Deleted RoomType?!")
  }
  return (
    <div>
      <div className="container -translate-y-[550px]">
      <div className="add ml-[1200px] text-4xl bg-gray-600 text-white rounded-full w-9 space-x-3">
        <Link to='/PostRoomType'>
        <IoAddCircleSharp />
        </Link>
      </div>
   <table className='translate-x-[200px]  '>
          <thead className='bg-gray-500 text-white'>
            <tr>
              <th className='w-[130px]'>Room_id</th>
              <th className='w-[130px]'>Hotel_id</th>
              <th className='w-[130px]'>Type_id</th>
              <th className='w-[130px]'>Booking_id</th>
              <th className='w-[130px]'>status</th>
              <th className='w-[130px]'>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-gray-300 translate-y-2 text-gray-700'>
            <tr className=''>
              <td className='text-center'>1</td>
              <td className='text-center'>10</td>
              <td className='text-center'>9</td>
              <td className='text-center'>7</td>
              <td className='text-center'>yeah</td>
              <div className="buttons flex text-white">
             <Link to='/UpdateRoomType'> <button className='bg-green-600  px-3 border-2 p-1'>Update</button></Link>
            <button className='bg-red-600 px-3 border-2 p-1 ' onClick={handleDelete}>Delete</button>
              </div>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RoomType