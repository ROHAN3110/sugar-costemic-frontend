import { useState } from 'react'

   import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar'
import {NavbarTag} from './Components/NavbarTag'
import { Slider } from './Components/Slider'
import { Slider2 } from './Components/slider2'
import { Slider3 } from './Components/Slider3';
import {Routes,Route} from "react-router-dom"
import { Makeup } from './Components/Makeup'
import { Brush } from './Components/Brush'
import { Trending } from './Components/Trending'
import { Skincare } from './Components/Skincare'
import { Cart } from './Components/Cart'
import RegisterPage from './Components/RegisterPage'
import { LoginPage } from './Components/Login'
import HomePage from './Components/HomePage'
import SignInSide from './Components/SignIn/SignInSide'
import { SugarSignIn } from './Components/sugarsignIn'
import { SugarSignUp } from './Components/SugarSignUp'
import { Checkout } from './Components/Checkout'
import { PaymentOption } from './Components/Payment'


// import { Payments } from '@mui/icons-material'


function App() {
  
  

  return (
    <div >
       
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/makeup' element={ <Makeup/>}></Route>
        <Route path='/brush' element={ <Brush/>}></Route>
        <Route path='/trending' element={ <Trending/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        <Route path="/login" element={<SugarSignIn/>}></Route>
        <Route path='/Register' element={<RegisterPage/>}> </Route>
        <Route path='/signup' element={<SugarSignUp/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/payment' element={<PaymentOption/>}></Route>
      </Routes>

     
    </div>
  )
}


export default App
