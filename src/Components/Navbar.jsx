import "./Navbar.css" 
import styled from "styled-components";
import { FaBeer } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";


import { AiTwotoneHeart,AiTwotoneShopping } from "react-icons/ai";


import {Link} from "react-router-dom"




export const Navbar=()=>{

  

    return <div className="navbar-container">
      <div >
        <Link to="/">
        <img src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png" alt="logo.png" />
        </Link>
      
      </div>
       <div className="input-bar"  >
         <input  type="text" placeholder='Try "Liquid Lipsticks"'></input>
         <button className="btn">Search</button>
       </div>
       <div className="login-div">
         
         <img className="login-logo" src="https://in.sugarcosmetics.com/desc-images/person.png" alt="icon.png"/>
           <Link to="/login">  <span className="register">Login/Register</span></Link>
         
             
           
       </div>
       <div className="icons-div">
       
            <span onClick={()=>{
              alert("you liked this")
            }} className="icons-modify"><AiTwotoneHeart/></span>
             <Link to="/cart" className="icons-modify"><AiTwotoneShopping/></Link>
            


<span className="icons-modify"><AiTwotoneShopping/></span>


            

           
            

       </div>
    </div>
}
