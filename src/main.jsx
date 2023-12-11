import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './routes/Routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1280px] mx-auto min-h-screen bg-slate-600'>
    <RouterProvider router={Routers}/>
    </div>
  </React.StrictMode>,
)
