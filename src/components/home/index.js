import React from "react";
import { useSelector } from "react-redux";
import TweetModal from "../menubar/tweetModal";
import Activity from "../profile/activity";
import { Tweet } from "../styles/home";
import { ProfileCorner, Header } from "../styles/common";

const URL = process.env.REACT_APP_SERVER_URL;
const Home = () => {
  const userId = useSelector((state) => state.profile.user.id);
  return (
    <ProfileCorner>
      <Header>
        <h2>Home</h2>
      </Header>
      <Tweet>
        <TweetModal rows={3} />
      </Tweet>
      <Activity url={`${URL}/feed?userId=${userId}`} />
    </ProfileCorner>
  );
};
 
export default Home;
