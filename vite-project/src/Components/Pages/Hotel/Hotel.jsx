import React from 'react'
import {Link} from 'react-router-dom'
import { IoAddCircleSharp } from "react-icons/io5";

const Hotel = () => {
  return (
    <div>
      <div className="container -translate-y-[470px]">
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
              <th className='w-[140px]'>Check in</th>
              <th className='w-[140px]'>Cheack out</th>
            </tr>
          </thead>
          <tbody className='bg-gray-300 translate-y-2'>
            <tr className=''>
              <td className='text-center'>1</td>
              <td className='text-center'>Avav Hotel</td>
              <td className='text-center'>jigjiga</td>
              <td className='text-center'>Avav@hotmail.com</td>
              <td className='text-center'>+251921236763</td>
              <td className='text-center'>6:00am</td>
              <td className='text-center'>11:00pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Hotel