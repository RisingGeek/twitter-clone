import styled from "styled-components";

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
    background-color: rgba(29, 161, 242, 0.1);
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
  p,
  span {
    font-size: 15px;
    font-weight: 400;
    color: rgb(101, 119, 134);
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
  div p:hover {
    text-decoration: underline;
  }
  div span:first-child {
    color: rgb(0, 0, 0);
    font-weight: 700;
  }
  div span:last-child {
    color: rgb(101, 119, 134);
    font-weight: 400;
  }
`;

export const Tab = styled.nav`
  display: flex;
  text-align: center;
  border-bottom: 1.8px solid lightgray;
  div {
    padding: 15px;
  }
  a {
    flex-basis: 50%;
    color: rgb(101, 119, 134);
    font-weight: 700;
    border-bottom: 2px solid transparent;
  }
  a:hover {
    background-color: rgba(29, 161, 242, 0.1);
    color: rgb(29, 161, 242);
  }
`;

export const Cover = styled.div`
  height: 150px;
  background-color: rgb(204, 214, 221);
`;

export const Avatar = styled.div`
  width: 30%;
  height: 30%;
  img {
    margin-top: -50%;
    width: 100%;
    height: 100%;
    border: 4px solid rgb(255, 255, 255);
    border-radius: 50%;
  }
`;

export const ImgFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Button = styled.button`
  background: rgb(255, 255, 255);
  border: 1px solid rgb(29, 161, 242);
  border-radius: 50px;
  font-size: 15px;
  font-weight: bold;
  color: rgb(29, 161, 242);
  text-align: center;
  padding: 1% 3%;
  cursor: pointer;
  &:hover {
    background: rgb(26, 145, 218, 0.1);
  }
`;
