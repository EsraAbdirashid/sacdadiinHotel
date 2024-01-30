// import React from 'react'
// import {Link} from 'react-router-dom'
// import { IoAddCircleSharp } from "react-icons/io5";

// const Room = () => {
//   const handleDelete=()=>{
//     alert("Deleted Room?!")
//   }
//   return (
//     <div>
//       <div className="container -translate-y-[550px]">
//       <div className="add ml-[1200px] text-4xl bg-gray-600 text-white rounded-full w-9 space-x-3">
//         <Link to='/PostRoom'>
//         <IoAddCircleSharp />
//         </Link>
//       </div>
//    <table className='translate-x-[200px]  '>
//           <thead className='bg-gray-500 text-white'>
//             <tr>
//               <th className='w-[130px]'>Room_id</th>
//               <th className='w-[130px]'>RoomNumber</th>
//               <th className='w-[130px]'>Guest_id</th>
//               <th className='w-[130px]'>TotalPrice</th>
//               <th className='w-[130px]'>CheckInData</th>
//               <th className='w-[130px]'>CheckoutData</th>
//               <th className='w-[130px]'>Actions</th>
//             </tr>
//           </thead>
//           <tbody className='bg-gray-300 translate-y-2 text-gray-700'>
//             <tr className=''>
//               <td className='text-center'>1</td>
//               <td className='text-center'>107</td>
//               <td className='text-center'>3</td>
//               <td className='text-center'>Birr1500</td>
//               <td className='text-center'>30/1/2024</td>
//               <td className='text-center'>10/2/2024</td>
//               <div className="buttons flex text-white">
//              <Link to='/UpdateRoom'> <button className='bg-green-600  px-3 border-2 p-1'>Update</button></Link>
//             <button className='bg-red-600 px-3 border-2 p-1 ' onClick={handleDelete}>Delete</button>
//               </div>
              
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Room