import styled from 'styled-components';

export const LogoWrapper = styled.div`
    background: rgb(113, 201, 248);
    height: 100vh;
    overflow: hidden;
`;

export const Motto = styled.div`
    margin-bottom: 40px;
    span {
        color: rgb(255,255,255);
        font-size: 19px;
        font-weight: bold;
        margin-left: 15px;
    }
`;

export const Button = styled.button`
    width: 100%;
    background: ${props => props.bg};
    color: ${props => props.color};
    border: 1px solid rgb(29, 161, 242);
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;

    &:hover {
        background: ${props => props.hovbg};
    }
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
    div {
        margin-right: 10px;
        height: 63px;
    }
    input {
        width: 100%;
        border: none;
        height: 50px;
        border-bottom: 2px solid gray;
        background: rgba(29,161,242,0.1);
        outline: none;
        &:focus {
            border-bottom: 2px solid rgb(29,161,242);
        }
    }
    @media(max-width: 768px) {
        margin-bottom: 50px;
        div {
            width: 100%;
            margin-bottom: 20px;
        }
    }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    div {
        width: 50%;
    }
    h1 {
        font-size: 30px;
        font-weight: bold;
    }
    p {
        font-size: 15px;
        font-weight: bold;
        color: black;
        margin-top: 15%;
    }
    @media(max-width: 768px) {
        div {
            width: 100%;
        }
    }
`;

export const Error = styled.p`
    font-size: 13px;
    color: rgb(255,0,0);
    margin: 0;
`;
