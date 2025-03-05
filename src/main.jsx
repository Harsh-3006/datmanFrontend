import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Page from './components/PAGE/Page'
import { Toaster } from 'react-hot-toast'; 
import Login from './components/LOGIN/Login'
import StandardLayout from './StandardLayout'
import Signup from './components/SIGNUP/Signup'
import CreateSMS from './components/SMS/CreateSMS'
import GetCampaignsPage from './components/SMS/GetCampaignsPage'
import AddShopperPage from './components/SHOPPER/AddShopperPage'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<StandardLayout/>}>
      <Route path='' element={<Page/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='create-compaign' element={<CreateSMS/>}/>
      <Route path='get-compaign' element={<GetCampaignsPage/>}/>
      <Route path='add-shopper' element={<AddShopperPage/>}/>


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster reverseOrder={false} />  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
