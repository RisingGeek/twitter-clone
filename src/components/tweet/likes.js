import React from "react";
import Modal from "../modal";

const Likes = () => {
  return (
    <Modal
      children={<TweetModal handleClose={handleClose} />}
      handleClose={handleClose}
    />
  );
};

export default Likes;
