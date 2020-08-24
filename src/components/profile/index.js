import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Follower from "./follower";
import Icon from "../icon";
import ProfileHeader from "../profileHeader";
import Tabs from "../tabs";
import Follow from "../follow/index";
import Activity from "./activity";
import Modal from "../modal";
import EditProfileForm from "./editProfileForm";
import { Info, Dates, Cover, Avatar, ImgFlex, Button } from "../styles/profile";
import { ProfileCorner } from "../styles/common";
import Loading from "../loading";
import { toast } from "react-toastify";
import { SET_USER, SET_UPDATE } from "../../redux/actions";

const URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const [headerText, setHeaderText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);

  const { username, activity } = useParams();
  const storeUser = useSelector((state) => state.profile.user);
  const refresh = useSelector((state) => state.update.refresh);
  const theme = useSelector((state) => state.theme);
  const myId = storeUser.id;
  const token = storeUser.token;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${URL}/user/get-user?username=${username}`);
      setUser(res.data);
    })();
  }, [username, refresh]);

  const handleHeaderText = (text) => {
    setHeaderText(text);
  };

  const handleSubmit = async (data) => {
    setIsSaveDisabled(true);
    const formData = new FormData();
    formData.append("userId", user.id);
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("dob", data.dob);
    formData.append("bio", data.bio);
    formData.append("location", data.location);
    if (typeof data.avatar === "object") formData.append("avatar", data.avatar);
    if (typeof data.cover === "object") formData.append("cover", data.cover);
    const res = await axios.put(`${URL}/user/edit-user`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setIsSaveDisabled(false);
    setIsModalOpen(false);
    toast("Profile was edited successfully");
    dispatch({
      type: SET_USER,
      payload: {
        ...storeUser,
        firstname: data.firstname,
        lastname: data.lastname,
        dob: data.dob,
        bio: data.bio,
        location: data.location,
        avatar: data.avatar,
        cover: data.cover,
      },
    });
    dispatch({ type: SET_UPDATE });
  };

  if (user === null) return <Loading />;

  const dob = new Date(user.dob);
  const joinedAt = new Date(user.createdAt);
  const dobPath = [
    "M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z",
    "M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z",
  ];
  const joinPath = [
    "M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z",
  ];
  const locationPath = [
    "M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z",
    "M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z",
  ];
  const tabList = [
    {
      name: "tweets",
      title: "Tweets",
      path: undefined,
    },
    {
      name: "media",
      title: "Media",
      path: "/media",
    },
    {
      name: "likes",
      title: "Likes",
      path: "/likes",
    },
  ];

  if (activity === "followers" || activity === "following") return <Follow />;

  const renderTab = () => {
    // undefined -> tweet
    switch (activity) {
      case undefined:
        return (
          <div>
            <Activity
              url={`${URL}/user/get-tweets?userId=${user.id}&myId=${myId}`}
              dataKey="tweets"
              header="Tweets"
              handleHeaderText={handleHeaderText}
            />
          </div>
        );
      case "media":
        return (
          <div>
            <Activity
              url={`${URL}/user/get-media?userId=${user.id}&myId=${myId}`}
              dataKey="media"
              header="Photos &amp; Videos"
              handleHeaderText={handleHeaderText}
            />
          </div>
        );
      case "likes":
        return (
          <div>
            <Activity
              url={`${URL}/user/get-likes?userId=${user.id}&myId=${myId}`}
              dataKey="likes"
              header="Likes"
              handleHeaderText={handleHeaderText}
            />
          </div>
        );
    }
  };

  return (
    <React.Fragment>
      {isModalOpen && (
        <Modal
          children={
            <EditProfileForm
              onSubmit={handleSubmit}
              initialValues={user}
              isSaveDisabled={isSaveDisabled}
            />
          }
          handleClose={() => setIsModalOpen(false)}
          padding="15px"
          heading="Edit profile"
        />
      )}
      <ProfileCorner border={theme.border}>
        <ProfileHeader
          heading={`${user.firstname} ${user.lastname}`}
          text={headerText}
        />
        <div>
          <Cover
            bg={theme.border}
            style={{
              backgroundImage: `url(${user.cover})`,
              backgroundSize: "cover",
            }}
          ></Cover>
          <ImgFlex>
            <Avatar backgroundImage={user.avatar} bg={theme.bg} />
            {storeUser.id === user.id && (
              <Button bg={theme.bg} onClick={() => setIsModalOpen(true)}>
                Edit profile
              </Button>
            )}
          </ImgFlex>
        </div>
        <Info color={theme.color}>
          <h2>
            {user.firstname} {user.lastname}
          </h2>
          <p>@{user.username}</p>
          {user.bio && <p>{user.bio}</p>}
          <Dates>
            {user.location && (
              <div>
                <Icon
                  d={locationPath}
                  width="18.75px"
                  height="18.75px"
                  fill="rgb(101,119,134)"
                />
                <span>{user.location}</span>
              </div>
            )}
            <div>
              <Icon
                d={dobPath}
                width="18.75"
                height="18.75"
                fill="rgb(101, 119, 134)"
              />
              <span>
                Born {dob.toLocaleString("default", { month: "long" })}{" "}
                {dob.getDate()}, {dob.getFullYear()}
              </span>
            </div>
            <div>
              <Icon
                d={joinPath}
                width="18.75"
                height="18.75"
                fill="rgb(101, 119, 134)"
              />
              <span>
                {" "}
                Joined{" "}
                {joinedAt.toLocaleString("default", {
                  month: "long",
                })}{" "}
                {joinedAt.getFullYear()}
              </span>
            </div>
          </Dates>
          <Follower user={user} />
        </Info>
        <Tabs tabList={tabList} />
        {renderTab()}
      </ProfileCorner>
    </React.Fragment>
  );
};

export default Profile;
