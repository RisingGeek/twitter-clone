import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Icon from "../icon";
import { PeopleFlex, TweetDetails, EmptyMsg } from "../styles/profile";

const Activity = (props) => {
  const [tweets, setTweets] = useState(null);
  const {username} = useParams();
  const { url, dataKey } = props;

  const commentPath = [
    "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z",
  ];
  const retweetPath = [
    "M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z",
  ];
  const likePath = [
    "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z",
  ];

  useEffect(() => {
    // ComponentDidMount
    (async () => {
      const res = await axios.get(url);
      setTweets(res.data.tweets);
      console.log(res.data);
    })();
  }, [url]);

  if (!tweets) return <div>Loading...</div>;

if(!tweets.length) return <EmptyMsg>@{username} has no {dataKey} yet!</EmptyMsg>
  return tweets.map((tweet) => {
    const date = new Date(tweet["Tweets.createdAt"]);
    return (
      <Link
        key={tweet["Tweets.id"]}
        to={`/${tweet.username}/status/${tweet["Tweets.id"]}`}
      >
        <PeopleFlex hover>
          <div>
            <img src={tweet.avatar} />
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
                <span style={{ marginLeft: "3px" }}>
                  {tweet["Tweets.commentsCount"]}
                </span>
              </div>
              <div>
                <Icon
                  d={retweetPath}
                  width="18.75px"
                  height="18.75px"
                  fill="rgb(101, 119, 134)"
                />
                <span style={{ marginLeft: "3px" }}>
                  {tweet["Tweets.retweetsCount"]}
                </span>
              </div>
              <div>
                <Icon
                  d={likePath}
                  width="18.75px"
                  height="18.75px"
                  fill="rgb(101, 119, 134)"
                />
                <span style={{ marginLeft: "3px" }}>
                  {tweet["Tweets.likesCount"]}
                </span>
              </div>
            </TweetDetails>
          </div>
        </PeopleFlex>
      </Link>
    );
  });
};

export default Activity;
