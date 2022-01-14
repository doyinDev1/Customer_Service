import styled from "styled-components"

export const LoginContainer = styled.section`
    min-height: 100vh;
    display: grid;
    gap: 70px;

    @media screen and (min-width: 768px){
        gap: 0;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const LoginTypes = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 20px;
    background-color: #344148;
    background-image: url('https://www.accessbankplc.com/AccessBankGroup/media/Media/HY-21-Banner.jpg?ext=.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0; 

    ::after {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        inset: 0;
        z-index: -1;
        background-color: rgba(0, 0, 0, 0.5);
    }

    > h1 {
        font-size: 40px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
    }

    > p {
        font-size: 18px;
        text-transform: capitalize;
        color: #fff;
    }

    @media screen and (min-width: 768px) {
        > h1 {
            font-size: 45px;
        }

        > p {
            font-size: 22px;
        }
    }
`

export const LoginForms = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px 20px;
    background-color: whitesmoke;
`

export const UserButtons = styled.div`
    display: grid;
    gap: 10px;
    margin-top: 15px;

    > button {
        padding: 12px;
        width: 70%;
        margin: 0 auto;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 500;
        border-radius: 2px;
        border: 2px solid #fff;
        outline: none;
        background-color: transparent;
        transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 500ms;
        color: #fff;
        position: relative;
        z-index: 1;

        :hover {
            color: #fff;
        }
    }

    @media screen and (min-width: 768px) {
        > button {
            padding: 15px 10px;
            width: 55%;
            font-size: 15px;
        }
    }
`

export const CommonUser = styled.button`
    :focus {
        border: 2px solid #ff8200;
    }
`

export const AdminUser = styled.button`
    :focus {
        border: 2px solid #003883;
    }
`
