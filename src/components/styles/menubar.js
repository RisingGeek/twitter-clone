import styled from 'styled-components';

export const Header = styled.header`
    padding-left: 10px;
    padding-right: 10px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    .selected {
        .active {
            fill: rgba(29,161,242,1.00);
            color: rgba(29,161,242,1.00);
            border-radius: 50px;
        }
    }
`;

export const MenuItem = styled.div`
    ${props => props.logo && { display: "inline-block" }};
    margin-top: 10px;
    color: #000000;

    div {
        display: inline-block;
        padding: 10px;
    }

    &:hover div {
        color: rgba(29,161,242,1.00);
        fill: rgba(29,161,242,1.00);
        background: rgba(29,161,242,0.1);
        border-radius: 50px;
    }
`;

export const MenuTitle = styled.span`
    margin-left: 20px;
    font-size: 19px;
    font-weight: bold;
    line-height: 1.3;
    text-transform: capitalize;
    @media(max-width: 768px) {
        display: none;
    }
`;

export const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    background: rgba(29,161,242,1.00);
    border: none;
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding: ${props => props.padding};
    &:hover {
        background: rgb(26,145,218);
    }
`;
