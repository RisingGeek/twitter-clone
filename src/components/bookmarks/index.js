import React from "react";
import { useSelector } from "react-redux";
import { ProfileCorner, Header } from "../styles/common";
import Activity from "../profile/activity";

const URL = process.env.REACT_APP_SERVER_URL;

const BookMarks = () => {
  const user = useSelector((state) => state.profile.user);
  const theme = useSelector((state) => state.theme);

  return (
    <ProfileCorner border={theme.border}>
      <Header bg={theme.bg} color={theme.color} para={theme.para} border={theme.border}>
        <h2>Bookmarks</h2>
        <p>@ {user.username}</p>
      </Header>
      <Activity
        url={`${URL}/bookmarks?userId=${user.id}`}
        dataKey="bookmarks"
        removeBookmark
        isBookmark
      />
    </ProfileCorner>
  );
};

export default BookMarks;
