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
