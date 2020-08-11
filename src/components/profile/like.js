import React, { useState } from "react";
import axios from "axios";
import Icon from "../icon";
import { Text } from "../styles/profile";

const URL = process.env.REACT_APP_SERVER_URL;

const Like = (props) => {
  const [likeDisabled, setLikeDisabled] = useState(false);
  const { tweets, tweet, idx, updateDetails, myId,getData } = props;
  const likePath = [
    "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z",
  ];

  const handleLike = async (e, idx) => {
    e.preventDefault();
    setLikeDisabled(true);
    if (tweets[idx].selfLiked) {
      // unlike
      console.log("unlike");
      try {
        await axios.delete(`${URL}/tweet/like/remove`, {
          data: {
            userId: myId,
            tweetId: tweets[idx]["Tweets.id"],
          },
        });
        updateDetails(idx, [
          ["selfLiked", false],
          ["Tweets.likesCount", tweets[idx]["Tweets.likesCount"] - 1],
        ]);
        getData();
        setLikeDisabled(false);
      } catch (err) {
        console.log(err.response.data);
        setLikeDisabled(false);
      }
    } else {
      // like
      console.log("like");
      try {
        await axios.post(`${URL}/tweet/like/add`, {
          userId: myId,
          tweetId: tweets[idx]["Tweets.id"],
        });
        updateDetails(idx, [
          ["selfLiked", true],
          ["Tweets.likesCount", tweets[idx]["Tweets.likesCount"] + 1],
        ]);
        setLikeDisabled(false);
      } catch (err) {
        console.log(err.response.data);
        setLikeDisabled(false);
      }
    }
  };

  return (
    <button onClick={(event) => handleLike(event, idx)} disabled={likeDisabled}>
      <Icon
        d={likePath}
        width="18.75px"
        height="18.75px"
        fill={tweet.selfLiked ? "rgb(224, 36, 94)" : "rgb(101, 119, 134)"}
      />
      <Text color={tweet.selfLiked ? "rgb(224, 36, 94)" : "rgb(101, 119, 134)"}>
        {tweet["Tweets.likesCount"]}
      </Text>
    </button>
  );
};

export default Like;
