import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Like from "./like";
import Retweet from "./retweet";
import Comment from "./comment";
import {
  PeopleFlex,
  TweetDetails,
  EmptyMsg,
  User,
  UserImage,
} from "../styles/profile";
import { isImage, isVideo } from "../../media";
import Loading from "../loading";
import Bookmark from "./bookmark";

const URL = process.env.REACT_APP_SERVER_URL;

const Activity = (props) => {
  const [tweets, setTweets] = useState(null);

  const { username } = useParams();
  const user = useSelector((state) => state.profile.user);
  const myId = user.id;
  const token = user.token;
  const refresh = useSelector((state) => state.update.refresh);

  const {
    url,
    dataKey,
    header,
    handleHeaderText,
    feed,
    removeBookmark,
    isBookmark,
  } = props;

  useEffect(() => {
    // ComponentDidMount
    getData();
  }, [url, refresh]);

  const getData = async () => {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTweets(res.data.tweets);
    handleHeaderText && handleHeaderText(`${res.data.tweets.length} ${header}`);
  };

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

  if (!tweets) return <Loading />;

  if (isBookmark && !tweets.length)
    return (
      <div style={{ textAlign: "center", padding: "40px 0px" }}>
        <h3 style={{ fontSize: "19px", fontWeight: 700 }}>
          You haven’t added any Tweets to your Bookmarks yet
        </h3>
        <p>When you do, they’ll show up here.</p>
      </div>
    );

  if (!tweets.length)
    return (
      <EmptyMsg>
        {feed
          ? "You are all caught up!"
          : `@${username} has no ${dataKey} yet!`}
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
          <User>
            <UserImage src={tweet.avatar} />
          </User>
          <div style={{ width: "80%" }}>
            <TweetDetails>
              {/* <object> to hide nested <a> warning */}
              <object>
                <Link to={`/profile/${tweet.username}`}>
                  <h3>
                    {tweet.firstname} {tweet.lastname}
                  </h3>
                </Link>
              </object>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  maxWidth: "18%",
                }}
              >
                @{tweet.username}
              </p>
              <span>
                {date.toLocaleString("default", { month: "short" })}{" "}
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
            <TweetDetails style={{ justifyContent: "space-between" }}>
              <Comment
                tweets={tweets}
                tweet={tweet}
                idx={idx}
                myId={myId}
                getData={getData}
              />

              <Retweet
                tweets={tweets}
                tweet={tweet}
                idx={idx}
                updateDetails={updateDetails}
                myId={myId}
                getData={getData}
              />
              <Like
                tweets={tweets}
                tweet={tweet}
                idx={idx}
                updateDetails={updateDetails}
                myId={myId}
                getData={getData}
              />
              <Bookmark
                tweet={tweet}
                myId={myId}
                removeBookmark={removeBookmark}
              />
            </TweetDetails>
          </div>
        </PeopleFlex>
      </Link>
    );
  });
};

export default Activity;
