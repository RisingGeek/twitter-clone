import React from "react";
import { Link, useParams } from "react-router-dom";
import { Tab } from "./styles/profile";

const Tabs = (props) => {
  // TabList -> [{path,name,title}]
  const { tabList } = props;
  const { username, activity } = useParams();
  const activeStyle = {
    borderBottom: "2px solid rgb(29,161,242)",
    color: "rgb(29,161,242)",
  };

  return (
    <Tab>
      {tabList.map((tab) => {
        const to =
          tab.name === "tweets"
            ? `/profile/${username}`
            : `/profile/${username}${tab.path}`;
        return (
          <Link
            key={tab.name}
            to={to}
            replace={true}
            style={
              activity === tab.name || (activity == undefined && tab.name === "tweets")
                ? activeStyle
                : {}
            }
          >
            <div>{tab.title}</div>
          </Link>
        );
      })}
    </Tab>
  );
};

export default Tabs;
