import React from "react";
import { useHistory } from "react-router-dom";
import Icon from "./icon";
import { Header, HeaderWrapper, BackBtn } from "./styles/profile";

const ProfileHeader = (props) => {
  const { heading, text } = props;
  const history = useHistory();
  const backIconPaths = [
    "M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z",
  ];
  return (
    <HeaderWrapper>
      <Header>
        <div>
          <BackBtn onClick={history.goBack}>
            <Icon
              d={backIconPaths}
              width="22.5px"
              height="22.5px"
              fill="rgb(29, 161, 242)"
            />
          </BackBtn>
        </div>
        <div>
          <h2>{heading}</h2>
          {text && <p>{text}</p>}
        </div>
      </Header>
    </HeaderWrapper>
  );
};

export default ProfileHeader;
