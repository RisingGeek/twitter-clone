import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Icon from "./icon";
import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  Button,
  CloseButton,
  ModalBody,
  Flex,
} from "./styles/modal";

const URL = process.env.REACT_APP_SERVER_URL;

const Modal = (props) => {
  const [text, setText] = useState("");
  const [isTweetDisabled, setIsTweetDisabled] = useState(true);
  const user = useSelector((state) => state.profile.user);
  const { toggleModal } = props;
  const closeButtonPath = [
    "M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z",
  ];

  const addTweet = async () => {
    setIsTweetDisabled(true);
    const res = await axios.post(`${URL}/tweet/add-tweet`, {
      userId: user.id,
      text,
    });
    setIsTweetDisabled(false);
    toggleModal();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={toggleModal}>
            <Icon
              d={closeButtonPath}
              width="22.5px"
              height="22.5px"
              fill="rgb(29, 161, 242)"
            />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
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
              <Flex
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
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
        </ModalBody>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
