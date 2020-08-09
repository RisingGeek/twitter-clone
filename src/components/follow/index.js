import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProfileHeader from "../profileHeader";
import Tabs from "../tabs";
import {
  PeopleFlex,
  PeopleDetails,
  EmptyMsg,
  UserImage,
} from "../styles/profile";
import { ProfileCorner } from "../styles/common";
import Loading from '../loading';

const URL = process.env.REACT_APP_SERVER_URL;

const Follow = () => {
  const [userData, setUserData] = useState(null);
  const { username, activity } = useParams();
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

  if (!userData) return <Loading />;

  return (
    <ProfileCorner>
      <ProfileHeader
        heading={`${userData.user.firstname} ${userData.user.lastname}`}
        text={`@${userData.user.username}`}
      />
      <Tabs tabList={tabList} />
      {!userData[activity].length ? (
        <EmptyMsg>
          {activity === "following"
            ? `@${username} doesn't follow anyone!`
            : `@${username} has no followers!`}
        </EmptyMsg>
      ) : (
        <div>
          {userData[activity].map((item) => (
            <Link key={item.id} to={`/profile/${item.username}`}>
              <PeopleFlex key={item.id}>
                <div>
                  <UserImage src={item.avatar} />
                </div>
                <div style={{ width: "100%" }}>
                  <PeopleDetails>
                    <div>
                      <object>
                        <Link to={`/profile/${item.username}`}>
                          <h3>
                            {item.firstname} {item.lastname}
                          </h3>
                        </Link>
                      </object>
                      <object>
                        <Link to={`/profile/${item.username}`}>
                          <p>@{item.username}</p>
                        </Link>
                      </object>
                    </div>
                    {/* <div>Following</div> */}
                  </PeopleDetails>
                  <div>
                    <p>{item.bio}</p>
                  </div>
                </div>
              </PeopleFlex>
            </Link>
          ))}
        </div>
      )}
    </ProfileCorner>
  );
};

export default Follow;
