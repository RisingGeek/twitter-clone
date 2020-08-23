import React from "react";
import { useSelector } from "react-redux";
import TweetModal from "../menubar/tweetModal";
import Activity from "../profile/activity";
import { Tweet } from "../styles/home";
import { ProfileCorner, Header } from "../styles/common";

const URL = process.env.REACT_APP_SERVER_URL;
const Home = () => {
  const userId = useSelector((state) => state.profile.user.id);
  const theme = useSelector((state) => state.theme);

  return (
    <ProfileCorner border={theme.border}>
      <Header border={theme.border} bg={theme.bg} color={theme.color}>
        <h2>Home</h2>
      </Header>
      <Tweet border={theme.border}>
        <TweetModal rows={3} />
      </Tweet>
      <Activity url={`${URL}/feed?userId=${userId}`} feed />
    </ProfileCorner>
  );
};

export default Home;
