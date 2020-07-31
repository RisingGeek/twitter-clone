import styled from "styled-components";

export const Search = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  background-color: rgba(204, 214, 221, 0.3);
  border: 1px solid transparent;
  border-radius: 50px;
  input {
    width: 100%;
    background-color: rgba(204, 214, 221, 0);
    border: none;
    outline: none;
  }
  &:focus-within {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(29, 161, 242);
    svg {
      fill: rgb(29, 161, 242);
    }
  }
`;
