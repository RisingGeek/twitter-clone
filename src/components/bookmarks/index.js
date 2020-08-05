import React from "react";
import { useSelector } from "react-redux";
import { ProfileCorner, Header } from "../styles/common";

const BookMarks = () => {
  const user = useSelector((state) => state.profile.user);
  return (
    <ProfileCorner>
      <Header>
        <h2>Bookmarks</h2>
        <p>@ {user.username}</p>
      </Header>
    </ProfileCorner>
  );
};

export default BookMarks;
