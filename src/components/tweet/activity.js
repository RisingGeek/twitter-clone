import React from "react";
import { ActivityBox, ActivityIcon } from "../styles/common";
import Icon from "../icon";

const Activity = (props) => {
  const { handleClick, hoverColor, hoverBg, path, fill, noPadding } = props;
  return (
    <ActivityBox
      onClick={handleClick}
      hoverColor={hoverColor}
      hoverBg={hoverBg}
      style={{ border: "none", background: "transparent", outline: "none" }}
      noPadding={noPadding}
    >
      <ActivityIcon>
        <Icon d={path} width="18.75px" height="18.75px" fill={fill} />
      </ActivityIcon>
    </ActivityBox>
  );
};

export default Activity;
