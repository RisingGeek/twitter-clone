import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Icon from "../icon";
import { Search, AutoComplete } from "../styles/explore";
import { PeopleFlex, PeopleDetails, UserImage } from "../styles/profile";
import { ProfileCorner } from "../styles/common";

const URL = process.env.REACT_APP_SERVER_URL;

const Explore = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(null);

  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const onDocumentClick = () => {
      setUsers(null);
    };
    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  const searchIcon = [
    "M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z",
  ];

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    const res = await axios.get(`${URL}/explore?search=${e.target.value}`);
    setUsers(res.data.users);
  };

  return (
    <ProfileCorner border={theme.border}>
      <div style={{ padding: "10px 15px" }}>
        <Search bg={theme.bg}>
          <Icon d={searchIcon} width="40px" height="18.75px" />
          <input
            placeholder="Search Twitter"
            value={search}
            style={{caretColor: theme.color, color: theme.color}}
            onChange={handleSearch}
          />
        </Search>
        {users && !users.length && (
          <AutoComplete>
            <h3 style={{ textAlign: "center", fontWeight: 700 }}>No results</h3>
          </AutoComplete>
        )}
        {users && users.length && (
          <AutoComplete>
            {users.map((item) => (
              <Link key={item.id} to={`/profile/${item.username}`}>
                <PeopleFlex key={item.id}>
                  <div>
                    <UserImage src={item.avatar} />
                  </div>
                  <div style={{ width: "100%" }}>
                    <PeopleDetails>
                      <div>
                        <object>
                          <Link to={`/profile/${item.username}`}>
                            <h3>
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
                      <p>{item.bio}</p>
                    </div>
                  </div>
                </PeopleFlex>
              </Link>
            ))}
          </AutoComplete>
        )}
        {!users && (
          <h2
            style={{ textAlign: "center", fontWeight: 700, color: theme.color }}
          >
            Search for users
          </h2>
        )}
      </div>
    </ProfileCorner>
  );
};

export default Explore;
