import styled from "styled-components";
import axios from 'axios';
import './SignUpForm.css'
import { FaRegEyeSlash,FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
const Form = styled.form`
width: 22%;
margin: 7% auto;
`

export const SignUp = ()=>{
    const [user,setUser] = useState({
        email: "",
        password: ""
    })
    const [otp,setOtp] = useState(null)
    const [myOtp,setMyOtp] = useState(null)
    const [visible,setVisible] = useState(false)
    document.getElementsByTagName('title')[0].innerText = 'Create Account';
    document.getElementsByTagName('body')[0].style.background = 'white';

    const handleChange = (event)=>{
        setUser({...user,[event.target.id]:event.target.value})
    }
    const navigate = useNavigate()
    return(
        <Form onSubmit={(event)=>{
            event.preventDefault();
            if(+otp !== +myOtp){
                alert("OTP is incorrect")
                return;
            }
            axios.post('https://oppo-backend.herokuapp.com/signup',user).then(res=>{
                alert('Account is Created')
                navigate('/signin')
            }).catch(err=>{
                alert("Please try with another Email Id")
            })
        }}>
            <h2>Create account</h2>
            <div style={{
                display:'flex',
                background: '#f7f7f7',
                fontSize: '13px',
                padding: '4%',
                borderRadius: '5px',
                gap: '10px'
            }}>
                <div>Country/Region</div><div>|</div>
                <div>India</div>
            </div>
            <span style={{fontSize: '12px',color: 'rgb(141 141 141)'}}>You will be unable to change your country/region after your account is created.</span><br/><br/>
            <input type="number" onChange={(event)=>handleChange(event)} placeholder="Enter 10 Digit Mobile Number" id="email" className="linput" required/><br/><br/>
            <div id="vdiv">
                <input type="number" placeholder="Verification Code" id="vinput" onChange={(event)=>setMyOtp(event.target.value)} required/>
                <div className='vcode' style={{width: '25%'}} onClick={()=>{
                   
                        alert("Your OTP IS 9828")
                
            
                }}>Get Code</div>
            </div><br/>
            <div style={{
                display:'flex',
                background: '#f7f7f7',
                fontSize: '13px',
                borderRadius: '5px',
                gap: '10px'
            }}>
                <input type={visible?'string':'password'} onChange={(event)=>handleChange(event)} placeholder="Password" id="password" className="linput" style={{
                    width: '80%'
                }} required/><div style={{
                    marginTop: '3.5%',
                    fontSize: '20px',
                    color: '#959595'
                }} onClick={()=>{
                    if(visible) setVisible(false);
                    else setVisible(true);
                }}>{visible?<FaRegEye/>:<FaRegEyeSlash/>}</div>
            </div><br/>
            <span style={{fontSize: '12px',color: 'rgb(141 141 141)'}}>Password most contain 6-16 characters from at least two of the following: digits, letters, or symbols.</span><br/><br/>
            <input type="checkbox" name="" id="" required/>
            <span id="condition">I have read and agree to the <span style={{color:'#2ec84e'}}>HeyPay Account User Agreement</span> and <span style={{color:'#2ec84e'}}>Policy Notice</span> </span><br/><br/><br/>
          <Link to="/login" onClick={()=>{
              alert("Successfully created Account")
          }}> <input type="submit" value='Create Account' className="lsubmit vbutton"/></Link>  
        </Form>
    )
}