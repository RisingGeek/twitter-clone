import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Flex, Button } from "../styles/modal";
import { TOGGLE_MODAL } from "../../redux/actions";

const URL = process.env.REACT_APP_SERVER_URL;

const TweetModal = (props) => {
  const [text, setText] = useState("");
  const [isTweetDisabled, setIsTweetDisabled] = useState(true);
  const user = useSelector((state) => state.profile.user);
  const { handleClose } = props;

  const addTweet = async () => {
    setIsTweetDisabled(true);
    const res = await axios.post(`${URL}/tweet/add-tweet`, {
      userId: user.id,
      text,
    });
    setIsTweetDisabled(false);
    handleClose();
  };

  return (
    <Flex>
      <div>
        <img
          src={user.avatar}
          width="49px"
          height="49px"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div style={{ width: "100%" }}>
        <textarea
          rows="5"
          placeholder="What's happening?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            e.target.value
              ? setIsTweetDisabled(false)
              : setIsTweetDisabled(true);
          }}
        ></textarea>
        <Flex style={{ alignItems: "center", justifyContent: "flex-end" }}>
          <div>
            <Button>Photo</Button>
          </div>
          <div>
            <Button onClick={addTweet} disabled={isTweetDisabled}>
              Tweet
            </Button>
          </div>
        </Flex>
      </div>
    </Flex>
  );
};

export default TweetModal;
