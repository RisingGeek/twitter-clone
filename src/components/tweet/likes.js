import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
import axios from "axios";
import Modal from "../modal";
import { PeopleFlex, PeopleDetails, UserImage } from "../styles/profile";

const URL = process.env.REACT_APP_SERVER_URL;

const Likes = () => {
  const [likes, setLikes] = useState([]);

  const theme = useSelector(state => state.theme);

  const { username, tweetId } = useParams();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const likes = await axios.get(
        `${URL}/tweet/like/get-likes?tweetId=${tweetId}`
      );
      setLikes(likes.data.likes);
    })();
  }, []);

  const handleClose = () => {
    history.replace(`/${username}/status/${tweetId}`);
  };

  return (
    <Modal
      padding="0 0 80px 0"
      handleClose={handleClose}
      heading="Liked by"
      children={
        <div>
          {likes.map((item) => (
            <Link key={item["Likes.id"]} to={`/profile/${item.username}`}>
              <PeopleFlex key={item.id} border={theme.border}>
                <div>
                  <UserImage src={item.avatar} />
                </div>
                <div style={{ width: "100%" }}>
                  <PeopleDetails>
                    <div>
                      <object>
                        <Link to={`/profile/${item.username}`}>
                          <h3 style={{color: theme.color}}>
                            {item.firstname} {item.lastname}
                          </h3>
                        </Link>
                      </object>
                      <object>
                        <Link to={`/profile/${item.username}`}>
                          <p>@{item.username}</p>
                        </Link>
                      </object>
                    </div>
                    {/* <div>Following</div> */}
                  </PeopleDetails>
                  <div>
                    <p style={{color: theme.color}}>{item.bio}</p>
                  </div>
                </div>
              </PeopleFlex>
            </Link>
          ))}
        </div>
      }
    />
  );
};

export default Likes;
