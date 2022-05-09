import {useEffect,useState} from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { NavbarTag } from "./NavbarTag";
 import './product.css'
export const Makeup=()=>{
    const [makeup,setMakeup]=useState([]);
  
    useEffect(()=>{
        getData();

        return function cleanup(){
            
        }
    },[]);

    const getData=async()=>{
        const data=await fetch("http://localhost:8080/makeup")
          .then((d)=>
            d.json()
           );
           setMakeup(data);
     
    }

    

return(
    <>
    
        <Navbar/>
        <NavbarTag/>
        <div className="grid" >
            <div>
              {makeup.map((t)=>(
             <div className="Apsara">
                 <img className="imagekasize" src={t.imgSrc} alt="" />
                 <h4> {t.Name}</h4>
                 <p>Rs{t.price}</p>
                 <p>{t.ratingNum}<span>
               
                 ({t.amount})</span></p>
                 <button  onClick={()=>{
                  console.log("clicked")
                  alert("Product added to cart")
                 
                const data=t;
               fetch("http://localhost:8080/cart",{
                   method:"POST",
                 headers:{
                     "content-type":"application/json"
                 },
                 body:JSON.stringify(data)
               })

            }}
                 
                 
                 
                 >ADD TO CART</button>
                
             </div>
          
         ))}
        </div>
         </div>
<Footer/>
</>


         )}
