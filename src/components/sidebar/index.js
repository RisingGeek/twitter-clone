import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SideBarBox, Header, Users, UserFlex, Button } from "../styles/sidebar";
import Loading from "../loading";
import { SET_UPDATE } from "../../redux/actions";

const URL = process.env.REACT_APP_SERVER_URL;

const SideBar = () => {
  const [whoFollow, setWhoFollow] = useState(null);
  const [isFollowDisabled, setFollowDisabled] = useState(false);

  const user = useSelector((state) => state.profile.user);
  const userId = user.id;
  const token = user.token;
  const refresh = useSelector((state) => state.update.refresh);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${URL}/feed/who-follow?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWhoFollow(res.data.whoFollow);
    })();
  }, [refresh]);

  const handleFollow = async (e, idx) => {
    e.preventDefault();
    setFollowDisabled(true);
    await axios.post(
      `${URL}/follow`,
      {
        followedId: whoFollow[idx].id,
        followerId: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await axios.get(`${URL}/feed/who-follow?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setWhoFollow(res.data.whoFollow);
    setFollowDisabled(false);
    dispatch({ type: SET_UPDATE });
  };

  if (!whoFollow) return <Loading />;
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
