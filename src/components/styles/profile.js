import styled from 'styled-components';

export const ProfileCorner = styled.div`
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    min-height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    div {
        margin-right: 10px;
    }
    h2 {
        line-height: 1.3;
        margin-bottom: 0;
        font-size: 19px;
        font-weight: 800;
    }
    p {
        color: rgb(101, 119, 134);
        font-size: 13px;
    }
`;

export const BackBtn = styled.div`
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: rgba(29, 161, 242,0.1);
    }
`;

export const Info = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    h2 {
        line-height: 1.3;
        margin-bottom: 0;
        font-size: 19px;
        font-weight: 800;
    }
    p, span {
        font-size: 15px;
        font-weight: 400;
        color:rgb(101, 119, 134);
    }
`;

export const Dates = styled.div`
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
    div {
        margin-right: 10px;
    }
`;

export const FollowFlex = styled.div`
    display: flex;
    div {
        margin-right: 20px;
    }
    div span:first-child {
        color: rgb(0,0,0);
        font-weight: 700;
    }
    div span:last-child {
        color: rgb(101,119,134);
        font-weight: 400;
    }
`;