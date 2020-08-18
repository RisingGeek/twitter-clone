import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Icon from "../icon";
import { Text } from "../styles/profile";
import { ActivityBox, ActivityIcon } from "../styles/common";

const URL = process.env.REACT_APP_SERVER_URL;

const Retweet = (props) => {
  const [retweetDisabled, setRetweetDisabled] = useState(false);

  const token = useSelector((state) => state.profile.user.token);

  const { tweets, tweet, idx, updateDetails, myId, getData } = props;
  const retweetPath = [
    "M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z",
  ];

  const handleRetweet = async (e, idx) => {
    e.preventDefault();
    setRetweetDisabled(true);
    if (tweets[idx].selfRetweeted) {
      // unretweet
      // console.log("unretweet");
      try {
        await axios.delete(`${URL}/tweet/retweet/remove`, {
          data: {
            userId: myId,
            tweetId: tweets[idx]["Tweets.id"],
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        updateDetails(idx, [
          ["selfRetweeted", false],
          ["Tweets.retweetsCount", tweets[idx]["Tweets.retweetsCount"] - 1],
        ]);
        getData && getData();
        setRetweetDisabled(false);
      } catch (err) {
        setRetweetDisabled(false);
      }
    } else {
      // retweet
      // console.log("retweet");
      try {
        await axios.post(
          `${URL}/tweet/retweet/add`,
          {
            userId: myId,
            tweetId: tweets[idx]["Tweets.id"],
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        updateDetails(idx, [
          ["selfRetweeted", true],
          ["Tweets.retweetsCount", tweets[idx]["Tweets.retweetsCount"] + 1],
        ]);
        setRetweetDisabled(false);
      } catch (err) {
        setRetweetDisabled(false);
      }
    }
  };

  return (
    <ActivityBox
      onClick={(event) => handleRetweet(event, idx)}
      disabled={retweetDisabled}
      hoverColor="rgb(23,191,99)"
      hoverBg="rgba(23,191,99,0.1)"
    >
      <ActivityIcon>
        <Icon
          d={retweetPath}
          width="18.75px"
          height="18.75px"
          fill={tweet.selfRetweeted ? "rgb(23, 191, 99)" : "rgb(101, 119, 134)"}
        />
      </ActivityIcon>
      <Text
        color={tweet.selfRetweeted ? "rgb(23, 191, 99)" : "rgb(101, 119, 134)"}
      >
        {tweet["Tweets.retweetsCount"]}
      </Text>
    </ActivityBox>
  );
};

export default Retweet;
