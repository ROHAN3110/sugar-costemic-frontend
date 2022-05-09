import {useEffect,useState} from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { NavbarTag } from "./NavbarTag";
import './product.css'
export const Trending=()=>{
    const [trending,setTrending]=useState([]);
  
    useEffect(()=>{
        getData();

        return function cleanup(){
            
        }
    },[]);

    const getData=async()=>{
        const data=await fetch("http://localhost:8080/trending")
          .then((d)=>
            d.json()
           );
           setTrending(data);
    
         
    }

    

return(
    <>
     <Navbar/>
        <NavbarTag/>
    <div className="grid" >
        <div>
       
           
              {trending.map((t)=>(
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
