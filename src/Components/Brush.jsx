import {useEffect,useState} from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { NavbarTag } from "./NavbarTag";
import './product.css'
export const Brush=()=>{
    const [brush,setBrush]=useState([]);
  
    useEffect(()=>{
        getData();

        return function cleanup(){
            
        }
    },[]);

    const getData=async()=>{
        const data=await fetch("http://localhost:8080/brush")
          .then((d)=>
            d.json()
           );
           setBrush(data);
    
         
    }

    

return(
    <>
    <Navbar/>
        <NavbarTag/>
    <div className="grid" >
        <div>
        
           
              {brush.map((t)=>(
             <div className="Apsara">
                 <img className="imagekasize" src={t.imgSrc} alt="" />
                 <h4> {t.Name}</h4>
                 <p>Rs{t.price}</p>
                 <p>{t.ratingNum}<span>
               
                 ({t.amount})</span></p>
                 <button>ADD TO CART</button>
                
             </div>
         ))}
         </div>
         </div>
         
         <Footer/>
         </>)}
