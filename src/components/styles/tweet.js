import styled from "styled-components";

export const TweetWrapper = styled.div`
  border-bottom: 1px solid rgb(230, 236, 240);
`;

export const UserImage = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Flex = styled.div`
  display: flex;
  h3 {
    margin-bottom: 0;
  }
  h3:hover {
    text-decoration: underline;
  }
  p {
    margin-bottom: 0;
    color: rgb(101, 119, 134);
    line-height: 1.13;
  }
`;

export const TweetText = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(230, 236, 240);
  p {
    padding: 5px 0px;
    color: rgb(0, 0, 0);
    font-size: 23px;
    font-weight: 400px;
    margin-bottom: 0;
  }
`;

export const ActivityInfo = styled.div`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(230, 236, 240);
  a {
    margin-right: 10px;
    font-size: 15px;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-color: rgb(0, 0, 0);
  }
  h4 {
    display: inline;
  }
  span {
    color: rgb(101, 119, 134);
  }
`;

export const Activity = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
`;
