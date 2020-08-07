import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "../icon";
import Like from "./like";
import Retweet from "./retweet";
import {
  PeopleFlex,
  TweetDetails,
  EmptyMsg,
  Text,
  UserImage,
} from "../styles/profile";
import { isImage, isVideo } from "../../media";

const URL = process.env.REACT_APP_SERVER_URL;

const Activity = (props) => {
  const [tweets, setTweets] = useState(null);
  const { username } = useParams();
  const myId = useSelector((state) => state.profile.user.id);
  const { url, dataKey, header, handleHeaderText } = props;

  const commentPath = [
    "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z",
  ];

  useEffect(() => {
    // ComponentDidMount
    (async () => {
      const res = await axios.get(url);
      setTweets(res.data.tweets);
      handleHeaderText(`${res.data.tweets.length} ${header}`);
    })();
  }, [url]);

  const updateDetails = (idx, newState) => {
    setTweets([
      ...tweets.slice(0, idx),
      {
        ...tweets[idx],
        [newState[0][0]]: newState[0][1],
        [newState[1][0]]: newState[1][1],
      },
      ...tweets.slice(idx + 1),
    ]);
  };

  if (!tweets) return <div>Loading...</div>;

  if (!tweets.length)
    return (
      <EmptyMsg>
        @{username} has no {dataKey} yet!
      </EmptyMsg>
    );
  return tweets.map((tweet, idx) => {
    const date = new Date(tweet["Tweets.createdAt"]);
    return (
      <Link
        key={tweet["Tweets.id"]}
        to={`/${tweet.username}/status/${tweet["Tweets.id"]}`}
      >
        <PeopleFlex hover>
          <div>
            <UserImage src={tweet.avatar} />
          </div>
          <div style={{ width: "100%" }}>
            <TweetDetails>
              {/* <object> to hide nested <a> warning */}
              <object>
                <Link to={`/profile/${tweet.username}`}>
                  <h3>
                    {tweet.firstname} {tweet.lastname}
                  </h3>
                </Link>
              </object>
              <p>@{tweet.username}</p>
              <span>
                {date.toLocaleString("default", { month: "long" })}{" "}
                {date.getDate()}{" "}
                {new Date().getFullYear() !== date.getFullYear() &&
                  date.getFullYear()}
              </span>
            </TweetDetails>
            <div>{tweet["Tweets.text"]}</div>
            {tweet["Tweets.media"] && isImage(tweet["Tweets.media"]) && (
              <img src={tweet["Tweets.media"]} style={{ width: "100%" }} />
            )}
            {tweet["Tweets.media"] && isVideo(tweet["Tweets.media"]) && (
              <video
                src={tweet["Tweets.media"]}
                style={{ width: "100%" }}
                controls
              ></video>
            )}
            <TweetDetails
              style={{ justifyContent: "space-between", width: "80%" }}
            >
              <div>
                <Icon
                  d={commentPath}
                  width="18.75px"
                  height="18.75px"
                  fill="rgb(101, 119, 134)"
                />
                <Text>{tweet["Tweets.commentsCount"]}</Text>
              </div>
              <Retweet
                tweets={tweets}
                tweet={tweet}
                idx={idx}
                updateDetails={updateDetails}
                myId={myId}
              />
              <Like
                tweets={tweets}
                tweet={tweet}
                idx={idx}
                updateDetails={updateDetails}
                myId={myId}
              />
            </TweetDetails>
          </div>
        </PeopleFlex>
      </Link>
    );
  });
};

export default Activity;
