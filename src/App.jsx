import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

import Navbar from './componenets/Navbar'
import Paste from './componenets/Paste'
import ViewPaste from './componenets/ViewPaste'
import { Provider } from 'react-redux'
import Home from './componenets/Homme'
//  create routes

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
      <Navbar/>
      <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:<div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:<div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
    {
      path:"/edit/:id",
      element:
      <div>
          <Home/>
      </div>
    },
  ]
)


function App() {
  return (
    <div>
    <RouterProvider router={router}>
    </RouterProvider>
  </div>
  )
}

export default App
