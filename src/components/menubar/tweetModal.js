import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UploadButton from "../uploadButton";
import { Flex, Button } from "../styles/modal";

const URL = process.env.REACT_APP_SERVER_URL;

const TweetModal = (props) => {
  const [text, setText] = useState("");
  const [isTweetDisabled, setIsTweetDisabled] = useState(true);
  const [preview, setPreview] = useState({ image: "", video: "" });
  const user = useSelector((state) => state.profile.user);
  const { handleClose, rows } = props;

  const addTweet = async () => {
    setIsTweetDisabled(true);
    const res = await axios.post(`${URL}/tweet/add-tweet`, {
      userId: user.id,
      text,
    });
    setIsTweetDisabled(false);
    handleClose && handleClose();
  };

  const handlePhoto = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    const isImage = file.type.includes("image");

    console.log(file.type);
    reader.onloadend = () => {
      isImage
        ? setPreview({ image: reader.result, video: "" })
        : setPreview({ image: "", video: reader.result });
    };
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
          rows={rows || 5}
          placeholder="What's happening?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            e.target.value
              ? setIsTweetDisabled(false)
              : setIsTweetDisabled(true);
          }}
        ></textarea>
        <div style={{ marginBottom: "10px" }}>
          {preview.image && (
            <img src={preview.image} style={{ width: "100%" }} />
          )}
          {preview.video && <video src={preview.video} style={{width: '100%'}} controls></video>}
        </div>
        <Flex style={{ alignItems: "center", justifyContent: "flex-end" }}>
          <div>
            <label htmlFor="photo">
              <UploadButton />
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*,video/*"
              onChange={handlePhoto}
              style={{ display: "none" }}
            />
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
