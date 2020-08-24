import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: sticky;
  background-color: white;
  top: 0;
  border-bottom: ${(props) => `1px solid ${props.border}`};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: ${(props) => props.bg};
  div {
    margin-right: 10px;
  }
  h2 {
    color: ${(props) => props.color};
    line-height: 1.3;
    margin-bottom: 0;
    font-size: 19px;
    font-weight: 800;
  }
  p {
    color: rgb(101, 119, 134);
    font-size: 13px;
    margin-bottom: 0;
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
    color: ${(props) => props.color};
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
  p {
    margin-bottom: 0;
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
  border-bottom: ${(props) => `1.8px solid ${props.border}`};
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
  background: ${(props) => props.bg};
  img {
    position: absolute;
    width: 100%;
    height: inherit;
  }
`;

export const Avatar = styled.div`
  width: 30%;
  height: 30%;
  width: 116.85px;
  height: 116.85px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  border: ${(props) => `4px solid ${props.bg}`};
  border-radius: 50%;
  margin-top: -13%;
  @media (max-width: 768px) {
    margin-top: -10%;
  }
  @media (max-width: 576px) {
    margin-top: -25%;
  }
`;

export const ImgFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Button = styled.button`
  background: ${(props) => props.bg};
  border: 1px solid rgb(29, 161, 242);
  border-radius: 50px;
  font-size: 15px;
  font-weight: bold;
  color: rgb(29, 161, 242);
  text-align: center;
  padding: 1% 3%;
  outline: none;
  cursor: pointer;
  &:hover {
    background: rgba(26, 145, 218, 0.1);
  }
`;

export const PeopleFlex = styled.div`
  display: flex;
  padding: ${(props) => (props.padding ? props.padding : "10px 15px")};
  color: rgb(0, 0, 0);
  border-bottom: ${(props) => `1px solid ${props.border}`};
  &:hover {
    background-color: ${(props) => props.tweetHov};
  }
`;

export const User = styled.div`
  width: 10%;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 15%;
  }
  @media (max-width: 576px) {
    width: 20%;
  }
`;

export const UserImage = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const PeopleDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 15px;
    font-weight: 700;
  }
  h3:hover {
    text-decoration: underline;
  }
  p {
    color: rgb(101, 119, 134);
    font-weight: 400;
    font-size: 15px;
  }
  h3,
  p {
    margin: 0;
    line-height: 1.23;
  }
`;

export const TweetDetails = styled.div`
  display: flex;
  h3 {
    color: ${(props) => props.color};
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    margin-right: 2px;
  }
  p {
    margin: 0;
    margin-right: 8px;
    color: rgb(101, 119, 134);
    font-weight: 400;
    font-size: 15px;
  }
  span {
    color: rgb(101, 119, 134);
  }
  h3:hover {
    text-decoration: underline;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
`;

export const EmptyMsg = styled.div`
  text-align: center;
  color: rgb(101, 119, 134);
  margin-top: 4px;
`;

export const Text = styled.span`
  margin-left: 3px;
  font-weight: 400;
  font-size: 15px;
  color: ${(props) => props.color};
`;
