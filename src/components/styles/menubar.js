import styled from "styled-components";

export const Header = styled.header`
  padding-left: 10px;
  padding-right: 10px;
  width: 70%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  position: sticky;
  top: 0;
  .selected {
    .active {
      fill: rgba(29, 161, 242, 1);
      color: rgba(29, 161, 242, 1);
      border-radius: 50px;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 576px) {
    align-items: center;
  }
`;

export const MenuItem = styled.div`
  ${(props) => props.logo && { display: "inline-block" }};
  margin-top: 10px;
  color: #000000;

  div {
    display: inline-block;
    padding: 10px;
  }

  &:hover div {
    color: rgba(29, 161, 242, 1);
    fill: rgba(29, 161, 242, 1);
    background: rgba(29, 161, 242, 0.1);
    border-radius: 50px;
  }
`;

export const MenuTitle = styled.span`
  margin-left: 20px;
  font-size: 19px;
  font-weight: bold;
  line-height: 1.3;
  text-transform: capitalize;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: ${(props) => props.width};
  ${(props) => props.height && `height: ${props.height}`};
  background: rgba(29, 161, 242, 1);
  border: none;
  border-radius: 50px;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-align: center;
  cursor: pointer;
  padding: ${(props) => props.padding};
  &:hover {
    background: rgb(26, 145, 218);
  }
`;
