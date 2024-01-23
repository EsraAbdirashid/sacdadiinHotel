import React from 'react'
import Dashboard from './Components/Dashboard'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <Dashboard/>

     <Outlet/>
    </div>
  )
}

export default App