import styled from "styled-components"
import { SignUp } from "./Form/SignUpForm"
import {FaCaretDown} from 'react-icons/fa'
export const SugarSignUp = ()=>{
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
        <Head>
            <div className="ltext">
                <div>English</div>
                <FaCaretDown/>
            </div>
            <div>Help Center</div>
        </Head>
        <SignUp/>
        </>
    )
}