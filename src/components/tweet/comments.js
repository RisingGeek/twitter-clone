import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../loading";
import { PeopleFlex, UserImage, TweetDetails } from "../styles/profile";
import { isImage, isVideo } from "../../media";

const URL = process.env.REACT_APP_SERVER_URL;

const Comments = () => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${URL}/tweet/comment/get-comments`);
      setComments(res.data.comments);
      console.log(res.data);
    })();
  }, []);

  if (!comments) return <Loading />;
  return (
    <div>
      {comments.map((comment) => {
        const date = new Date(comment["Comments.createdAt"]);
        return (
          <PeopleFlex hover key={comment["Comments.id"]}>
            <div>
              <UserImage src={comment.avatar} />
            </div>
            <div style={{ width: "100%" }}>
              <TweetDetails>
                {/* <object> to hide nested <a> warning */}
                <object>
                  <Link to={`/profile/${comment.username}`}>
                    <h3>
                      {comment.firstname} {comment.lastname}
                    </h3>
                  </Link>
                </object>
                <p>@{comment.username}</p>
                <span>
                  {date.toLocaleString("default", { month: "long" })}{" "}
                  {date.getDate()}{" "}
                  {new Date().getFullYear() !== date.getFullYear() &&
                    date.getFullYear()}
                </span>
              </TweetDetails>
              <div>{comment["Comments.text"]}</div>
              {comment["Comments.media"] &&
                isImage(comment["Comments.media"]) && (
                  <img
                    src={comment["Comments.media"]}
                    style={{ width: "100%" }}
                  />
                )}
              {comment["Comments.media"] &&
                isVideo(comment["Comments.media"]) && (
                  <video
                    src={comment["Comments.media"]}
                    style={{ width: "100%" }}
                    controls
                  ></video>
                )}
            </div>
          </PeopleFlex>
        );
      })}
    </div>
  );
};

export default Comments;
