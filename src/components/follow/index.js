import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProfileHeader from "../profileHeader";
import Tabs from "../tabs";
import { ProfileCorner } from "../styles/profile";

const URL = process.env.REACT_APP_SERVER_URL;

const Follow = () => {
  const [userData, setUserData] = useState(null);
  const { username, follow } = useParams();
  useEffect(() => {
    // ComponentDidMount
    (async () => {
      const user = await axios.get(`${URL}/user/get-user?username=${username}`);
      const res = await axios.get(`${URL}/follow/details?id=${user.data.id}`);
      setUserData({
        user: user.data,
        following: res.data.following,
        followers: res.data.followers,
      });
    })();
  }, []);

  if (!userData) return <div>Loading...</div>;

  const tabList = [
    {
      name: "followers",
      title: "Followers",
      path: "/followers",
    },
    {
      name: "following",
      title: "Following",
      path: "/following",
    },
  ];
  return (
    <ProfileCorner>
      <ProfileHeader user={userData.user} text={`@${userData.user.username}`} />
      <Tabs tabList={tabList} />
      {/*<div>
        {userData[follow].map((item) => (
          <div key={item.id}>{item.username}</div>
        ))}
      </div> */}
    </ProfileCorner>
  );
};

export default Follow;
