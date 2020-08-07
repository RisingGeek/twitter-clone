import styled from "styled-components";

export const SideBarBox = styled.div`
  background-color: rgb(245, 248, 250);
  width: 70%;
  margin: 10% 0 0 5%;
  border-radius: 15px;
`;

export const Header = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid rgb(230, 236, 240);
  h2 {
    color: rgb(20, 23, 26);
    font-size: 19px;
    font-weight: 800;
    margin: 0;
  }
`;

export const Users = styled.div`
  a:last-child div {
    border: none;
  }
`;
export const UserFlex = styled.div`
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid rgb(230, 236, 240);
  img {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 15px;
    font-weight: 700;
    line-height: 19.68px;
  }
  h3:hover {
    text-decoration: underline;
  }
  p {
    line-height: 19.68px;
    color: rgb(101, 119, 134);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid rgb(29, 161, 242);
  border-radius: 50px;
  padding: 5px 12px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
