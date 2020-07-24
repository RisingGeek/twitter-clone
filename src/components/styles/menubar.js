import styled from 'styled-components';

export const Header = styled.header`
    padding-left: 10px;
    padding-right: 10px;
`;

export const MenuItem = styled.div`
    ${props => props.logo && {display: "inline-block"}};
    padding: 10px;
    margin-top: 10px;
    color: #000000;
    &:hover {
        color: rgba(29,161,242,1.00);
        fill: rgba(29,161,242,1.00);
        background: rgba(29,161,242,0.1);
        border-radius: 50px;
    }
`;

export const MenuTitle = styled.span`
    margin-left: 20px;
    margin-right: 15px;
    font-size: 19px;
    font-weight: bold;
    line-height: 1.3;
`;

export const Button = styled.button`
    width: 100%;
    background: rgba(29,161,242,1.00);
    border: none;
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding: 12px 30px;
    &:hover {
        background: rgb(26,145,218);
    }
`;
