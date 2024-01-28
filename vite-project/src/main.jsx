import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './Components/Dashboard.jsx'
import Hotel from './Components/Pages/Hotel/Hotel.jsx'
import Employe from './Components/Pages/Employe/Employe.jsx'
import Room from './Components/Pages/Room/Room.jsx'
import RoomType from './Components/Pages/RoomType/RoomType.jsx'
import Booking from './Components/Pages/Booking/Booking.jsx'
import Guest from './Components/Pages/Guest/Guest.jsx'
import Payment from './Components/Pages/Payment/Payment.jsx'
import Login from './Components/Pages/Login/Login.jsx'
import Logout from './Components/Pages/Logout/Logout.jsx'
import Post from './Components/Pages/Hotel/Post.jsx'
import Update from './Components/Pages/Hotel/Update.jsx'
import PostEmploye from './Components/Pages/Employe/PostEmploye.jsx'
import UpdateEmploye from './Components/Pages/Employe/UpdateEmploye.jsx'

   


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'Dashboard',
        element: <Dashboard/>
      },
      {
        path: 'Hotel',
        element: <Hotel/>
      },
      // End Points HOTEL
      {
    path:'Post',
    element:<Post/>
      },
      {
      path:'Update',
      element:<Update/>
      },
      
      {
        path:'Employe',
        element:<Employe/>
      },
      // End Points Employe
      {
       path:'PostEmploye',
       element: <PostEmploye/>
      },
      {
        path:'UpdateEmploye',
        element:<UpdateEmploye/>
      },
      {
        path:'Room',
        element:<Room/>
      },
      {
        path:'RoomType',
        element: <RoomType/>
      },
      {
        path:'Booking',
        element: <Booking/>
      },
      {
        path:'Guest',
        element:<Guest/>
      },
     {
        path:'Payment',
        element:<Payment/>
     },
     {
      path:'Login',
      element:<Login/>
     },
     {
      path:'Logout',
      element:<Logout/>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}>
 <App />
 </RouterProvider>
  </React.StrictMode>,
)
