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
      <h2 style={{textAlign: 'center'}}>Coming soon!</h2>
    </ProfileCorner>
  );
};

export default BookMarks;
