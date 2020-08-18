import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ActivityBox, ActivityIcon } from "../styles/common";
import Icon from "../icon";
import { toast } from "react-toastify";
import { SET_UPDATE } from "../../redux/actions";

const URL = process.env.REACT_APP_SERVER_URL;

const Bookmark = (props) => {
  const [bookmarkDisabled, setBookmarkDisabled] = useState(false);

  const token = useSelector((state) => state.profile.user.token);
  const dispatch = useDispatch();
  const { tweet, myId, removeBookmark } = props;
  const bookmarkPath = [
    "M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z",
    "M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z",
  ];

  const handleBookmark = async (e) => {
    e.preventDefault();
    try {
      setBookmarkDisabled(true);
      await axios.post(
        `${URL}/bookmarks/add`,
        {
          userId: myId,
          tweetId: tweet["Tweets.id"],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBookmarkDisabled(false);
      toast("Tweet added to bookmarks");
    } catch (err) {
      setBookmarkDisabled(false);
      toast(err.response.data.errors);
    }
  };

  const handleRemoveBookmark = async (e) => {
    e.preventDefault();
    setBookmarkDisabled(true);
    await axios.delete(`${URL}/bookmarks/remove`, {
      data: {
        userId: myId,
        tweetId: tweet["Tweets.id"],
      },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBookmarkDisabled(false);
    toast("Tweet removed from bookmarks");
    dispatch({ type: SET_UPDATE });
  };

  return (
    <ActivityBox
      hoverColor="rgb(29,161,242)"
      hoverBg="rgba(29,161,242,0.1)"
      onClick={removeBookmark ? handleRemoveBookmark : handleBookmark}
      disabled={bookmarkDisabled}
    >
      <ActivityIcon>
        <Icon
          d={bookmarkPath}
          width="18.75px"
          height="18.75px"
          fill="rgb(101, 119, 134)"
        />
      </ActivityIcon>
    </ActivityBox>
  );
};

export default Bookmark;
