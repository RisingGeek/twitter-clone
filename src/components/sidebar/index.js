import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { SideBarBox, Header, Users, UserFlex, Button } from "../styles/sidebar";

const URL = process.env.REACT_APP_SERVER_URL;

const SideBar = () => {
  const [whoFollow, setWhoFollow] = useState(null);
  const [isFollowDisabled, setFollowDisabled] = useState(false);
  const userId = useSelector((state) => state.profile.user.id);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${URL}/feed/who-follow?userId=${userId}`);
      setWhoFollow(res.data.whoFollow);
    })();
  }, []);

  const handleFollow = async (e, idx) => {
    e.preventDefault();
    setFollowDisabled(true);
    await axios.post(`${URL}/follow`, {
      followedId: whoFollow[idx].id,
      followerId: userId,
    });
    const res = await axios.get(`${URL}/feed/who-follow?userId=${userId}`);
    setWhoFollow(res.data.whoFollow);
    setFollowDisabled(false);
  };

  if (!whoFollow) return <div>Loading...</div>;
  return (
    <SideBarBox>
      <Header>
        <h2>Who to follow</h2>
      </Header>
      <Users>
        {whoFollow.map((user, idx) => (
          <Link to={`/profile/${user.username}`} key={user.id}>
            <UserFlex>
              <img src={user.avatar} />
              <div>
                <h3>
                  {user.firstname} {user.lastname}
                </h3>
                <p>@{user.username}</p>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <Button
                  onClick={(e) => handleFollow(e, idx)}
                  disabled={isFollowDisabled}
                >
                  Follow
                </Button>
              </div>
            </UserFlex>
          </Link>
        ))}
      </Users>
    </SideBarBox>
  );
};

export default SideBar;
