import styled from "styled-components"

export const FormContainer = styled.div`
    padding: 2px;
    padding-top: 50px;
    position: relative;
    background-color: #fff;
    border-radius: 2px;
    border: 3px solid #777;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

    > h3 {
        text-align: center;
        font-weight: 700;
        color: #555;
    }

    > button:first-of-type {
        background-color: #777;
        border: 10px solid white;
        color: white;
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translate(-50%);
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

        .MuiSvgIcon-root {
            font-size: 50px 
        }
    }

    @media screen and (min-width: 868px) {
        padding-top: 60px;
        
        > button:first-of-type {
            top: -60px;

            .MuiSvgIcon-root {
                font-size: 60px 
            }
        }
    }
`

export const Form = styled.form(({admin}) => `
    padding: 5px 25px;
    border-radius: 2px;

    > button:last-of-type {
        border: none;
        outline: none;
        font-family: inherit;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 2px;
        cursor: pointer;
        font-size: 14px;
        color: black;
        margin-top: 10px;
        padding: 12px;
        width: 100%;
        transition: all 100ms ease-in-out;
        background-color: ${admin ? 'var(--blue)' : 'var(--orange)'};
        color: white;
    }

    @media screen and (min-width: 768px) {
        > button:last-of-type {
            padding: 15px 10px;
        }
    }
    `
)


export const InputField = styled.div`
    display: flex;
	flex-direction: column;
	margin-bottom: 15px;

    > label {
        font-weight: 600;
        color: #555;
        text-transform: capitalize;
        font-size: 13px;
        margin-bottom: 5px;
        border-radius: 2px;
    }
    
    > input {
        border: 1px solid #999;
        border-radius: 2px;
        padding: 12px;
        font-size: 14px;
        outline: none;
        transition: all ease-in-out 0.4s;

        :focus {
            background-color: whitesmoke;
            border: 1px solid #555;
        }
    }

    @media screen and (min-width: 768px) {
        > label {
            font-size: 15px;
        }

        > input {
            padding: 15px 10px;
        }
    }
`

export const ErrorMsg = styled.p`
    color: brown;
    font-size: 11px;
    font-weight: bold;
    padding: 2px 10px;
    margin: 0;
`

export const Host = styled.div`
    text-align: center;
    margin: 15px 25px;

    > p {
        text-transform: uppercase;

        > img {
            height: 65px;
        }
    }
`