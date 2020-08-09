import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const LoadingIcon = styled.div`
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
  svg {
    width: 26px;
    height: 26px;
    animation: ${spin} 2s linear infinite;
  }
`;
