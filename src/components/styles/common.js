import styled from "styled-components";

export const ProfileCorner = styled.div`
  border-left: 1px solid rgb(230, 236, 240);
  border-right: 1px solid rgb(230, 236, 240);
  min-height: 100vh;
  padding-bottom: 20%;
`;

export const Header = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid rgb(230, 236, 240);
  h2 {
    font-weight: 800;
  }
  p {
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
  padding: 8px;
  border-radius: 50%;
`;
