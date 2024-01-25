import React from 'react'
import {Link} from 'react-router-dom'
import { RiHotelLine } from "react-icons/ri";
import { FaHouseUser } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";
import { TbBrandBooking } from "react-icons/tb";
import { FaUsersLine } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
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
                                <Link to='/Employe'>
                                <FaHouseUser className='inline-block'/>
                                        Employe</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Room'>
                                <FaBed className='inline-block'/>
                                        Room</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/RoomType'>
                                <LuBedDouble className='inline-block'/>
                                        RoomType</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Booking'>
                                <TbBrandBooking className='inline-block' />
                                        Booking</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Guest'>
                                <FaUsersLine className='inline-block'/>
                                        Guest</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Payment'>
                                <MdOutlinePayments className='inline-block'/>
                                        Payment</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Report'>
                                <HiOutlineDocumentReport className='inline-block'/>
                                        Report</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Setting'>
                                <IoMdSettings className='inline-block'/>
                                        Setting</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Login'>
                                <RiLoginCircleFill className='inline-block'/>
                                        Login</Link>
                        </ul>
                        <ul  className='bg-white text-gray-700 rounded-full w-32 text-center font-bold mt-2 border-2 hover:bg-slate-400 hover:text-white'>
                                <Link to='/Logout'>
                                <RiLogoutCircleFill className='inline-block'/>

                                        Logout</Link>
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