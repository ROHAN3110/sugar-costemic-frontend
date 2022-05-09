import styled from "styled-components"
import {FaCaretDown} from 'react-icons/fa'
import { SignIn } from "./Form/SignInForm"
import { Navbar } from "./Navbar"
export const SugarSignIn = ()=>{
    const Head = styled.div`
    padding: 1% 15%;
    display: flex;
    gap: 30px;
    flex-direction: row-reverse;
    font-size: 15px;
    color: #67676e;
    .ltext{
        display: flex;
    }
    div:hover{
        color: #97979e;
    }
    `
    return(
        <>
        <Navbar/>
        <Head>
            <div className="ltext">
                <div>English</div>
                <FaCaretDown/>
            </div>
            <div>Help Center</div>
        </Head>
        <SignIn/>
        </>
    )
}