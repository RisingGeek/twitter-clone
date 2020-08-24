import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileHeader from "../profileHeader";
import Tabs from "../tabs";
import {
  PeopleFlex,
  PeopleDetails,
  EmptyMsg,
  UserImage,
} from "../styles/profile";
import { ProfileCorner, Button } from "../styles/common";
import Loading from "../loading";
import { SET_UPDATE } from "../../redux/actions";

const URL = process.env.REACT_APP_SERVER_URL;

const Follow = () => {
  const [userData, setUserData] = useState(null);
  const [followDisabled, setFollowDisabled] = useState(false);

  const { username, activity } = useParams();
  const user = useSelector((state) => state.profile.user);
  const refresh = useSelector((state) => state.update.refresh);
  const theme = useSelector((state) => state.theme);
  const myId = user.id;
  const token = user.token;
  const dispatch = useDispatch();

  useEffect(() => {
    // ComponentDidMount
    (async () => {
      const user = await axios.get(`${URL}/user/get-user?username=${username}`);
      const res = await axios.get(
        `${URL}/follow/details?id=${user.data.id}&myId=${myId}`
      );
      setUserData({
        user: user.data,
        following: res.data.following.map((item) => ({
          ...item,
          unfollow: false,
        })),
        followers: res.data.followers.map((item) => ({
          ...item,
          unfollow: false,
        })),
      });
    })();
  }, []);

  const handleFollow = async (e, id, idx, follow) => {
    e.preventDefault();
    setFollowDisabled(true);
    await axios.post(
      `${URL}/follow`,
      {
        followedId: id,
        followerId: myId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUserData({
      ...userData,
      [activity]: [
        ...userData[activity].slice(0, idx),
        {
          ...userData[activity][idx],
          isFollowing: follow,
          unfollow: follow,
        },
        ...userData[activity].slice(idx + 1),
      ],
    });
    setFollowDisabled(false);
    dispatch({ type: SET_UPDATE });
  };

  const handleMouseOver = (idx) => {
    setUserData({
      ...userData,
      [activity]: [
        ...userData[activity].slice(0, idx),
        {
          ...userData[activity][idx],
          unfollow: !userData[activity][idx].unfollow,
        },
        ...userData[activity].slice(idx + 1),
      ],
    });
  };

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
    <ProfileCorner border={theme.border}>
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
          {userData[activity].map((item, idx) => (
            <Link key={item.id} to={`/profile/${item.username}`}>
              <PeopleFlex
                key={item.id}
                border={theme.border}
                tweetHov={theme.tweetHov}
              >
                <div>
                  <UserImage src={item.avatar} />
                </div>
                <div style={{ width: "100%" }}>
                  <PeopleDetails>
                    <div>
                      <object>
                        <Link to={`/profile/${item.username}`}>
                          <h3 style={{ color: theme.color }}>
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
                    {item.id !== myId && (
                      <React.Fragment>
                        {item.isFollowing && (
                          <Button
                            disabled={followDisabled}
                            onMouseEnter={() => handleMouseOver(idx)}
                            onMouseLeave={() => handleMouseOver(idx)}
                            onClick={(e) =>
                              handleFollow(e, item.id, idx, false)
                            }
                            bg="rgb(29, 161, 242)"
                            hoverBg="rgb(202,32,85)"
                            color="rgb(255,255,255)"
                            padding="2% 5%"
                          >
                            {item.unfollow ? "Unfollow" : "Following"}
                          </Button>
                        )}
                        {!item.isFollowing && (
                          <Button
                            disabled={followDisabled}
                            onClick={(e) => handleFollow(e, item.id, idx, true)}
                            bg="transparent"
                            hoverBg="rgba(29, 161, 242,0.1)"
                            color="rgb(29, 161, 242)"
                            padding="2% 5%"
                            border="1px solid rgb(29,161,242)"
                          >
                            Follow
                          </Button>
                        )}
                      </React.Fragment>
                    )}
                  </PeopleDetails>
                  <div>
                    <p style={{color: theme.color}}>{item.bio}</p>
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
