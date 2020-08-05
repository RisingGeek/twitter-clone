import React from "react";
import TweetModal from "../menubar/tweetModal";
import { Tweet } from "../styles/home";
import { ProfileCorner, Header } from "../styles/common";

const Home = () => {
  return (
    <ProfileCorner>
      <Header>
        <h2>Home</h2>
      </Header>
      <Tweet>
        <TweetModal rows={3} />
      </Tweet>
    </ProfileCorner>
  );
};

export default Home;
