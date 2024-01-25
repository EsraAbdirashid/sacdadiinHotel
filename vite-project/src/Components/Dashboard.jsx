import React from 'react'
import {Link} from 'react-router-dom'
import { RiHotelLine } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div>
     <div className="container">
        <div className="header">
                <h2 className='bg-gray-500 text-white font-semibold p-4 text-center text-4xl'>SACADADIIN HOTEL</h2>
        </div>
        <div className="mainsection flex">
        <div className=" bg-slate-700 text-white w-[200px] h-[400px]">
                <nav className='p-1 translate-x-7'>
                        <ul className='bg-white text-gray-700 rounded-full w-32 text-center font-bold border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Hotel'>
                              
                              <RiHotelLine className='inline-block -translate-x-2'/>
                              
                                        Hotel</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Employe'>Employe</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Room'>Room</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/RoomType'>RoomType</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Booking'>Booking</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Guest'>Guest</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Payment'>Payment</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Report'>Report</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Setting'>Setting</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Login'>Login</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Logout'>Logout</Link>
                        </ul>
                </nav>
        </div>
        {/* <div className="img">
                <img src="./public/hotel.jpg" alt=""className='w-[1100px] h-[400px]' />
        </div> */}
        </div>
        <div className="footer bg-black text-white flex justify-between p-7 mt-28">
        <div className="copy">
        2024 &copy;
      </div>
      <div className="developed">
      developedby:Esra Abdirashid
      </div>
      <div className="icons">
     F T Y U 
      </div>
        </div>
     </div>
    </div>
  )
}

export default Dashboard