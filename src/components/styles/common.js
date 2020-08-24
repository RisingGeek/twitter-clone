import styled from "styled-components";

export const ProfileCorner = styled.div`
  border-left: ${(props) => `1px solid ${props.border}`};
  border-right: ${(props) => `1px solid ${props.border}`};
  min-height: 100vh;
  padding-bottom: 20%;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: ${(props) => props.bg};
  padding: 10px 15px;
  border-bottom: ${(props) => `1px solid ${props.border}`};
  h2 {
    font-weight: 800;
    color: ${(props) => props.color};
  }
  p {
    color: ${(props) => props.para};
    line-height: 13px;
  }
  * {
    margin-bottom: 0;
  }
`;

export const ActivityBox = styled.button`
  display: flex;
  align-items: center;
  &:hover {
    div {
      background-color: ${(props) => props.hoverBg};
    }
    svg {
      fill: ${(props) => props.hoverColor};
    }
    span {
      color: ${(props) => props.hoverColor};
    }
  }
`;

export const ActivityIcon = styled.div`
  border-radius: 50%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap wrap;
`;

export const Col = styled.div`
  display: block;
  ${(props) =>
    props.sm &&
    `  @media (min-width: 576px) {
      flex: 0 0 ${(props.sm / 24) * 100}%;
      max-width: ${(props.sm / 24) * 100}%;
    }`}

  ${(props) =>
    props.md &&
    `@media(min-width: 768px) {
    flex: 0 0 ${(props.md / 24) * 100}%;
    max-width: ${(props.md / 24) * 100}%;
  }`}

  ${(props) =>
    props.xs &&
    `@media (max-width: 576px) {
      flex: 0 0 ${(props.xs / 24) * 100}%;
      max-width: ${(props.xs / 24) * 100}%;
    }`}
`;

export const Button = styled.button`
  background: ${(props) => props.bg};
  border: ${(props) => props.border || "none"};
  border-radius: 50px;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.color};
  text-align: center;
  cursor: pointer;
  padding: ${(props) => props.padding};
  &:hover {
    background: ${(props) => props.hoverBg};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 50px;
  border-bottom: 2px solid gray;
  background: ${(props) => props.inputBg};
  caret-color: ${(props) => props.color};
  color: ${(props) => props.color};
  ${(props) => props.margin && `margin: ${props.margin};`}
  outline: none;
  &:focus {
    border-bottom: 2px solid rgb(29, 161, 242);
  }
`;

export const FileInput = styled.div`
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  &:hover {
    background-color: ${(props) => props.opaqueBg};
  }
`;
