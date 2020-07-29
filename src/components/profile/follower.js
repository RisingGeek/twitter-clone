import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { FollowFlex } from "../styles/profile";

const URL = process.env.REACT_APP_SERVER_URL;

const Follower = (props) => {
  const { user } = props;
  const history = useHistory();
  const location = useLocation();
  const [response, setResponse] = useState(null);
  useEffect(() => {
    // ComponentDidMount
    (async () => {
      const res = await axios.get(`${URL}/follow/details?id=${user.id}`);
      setResponse({
        followers: res.data.followers,
        following: res.data.following,
      });
    })();
  }, []);

  if (!response) return <React.Fragment></React.Fragment>;

  return (
    <FollowFlex>
      <div>
        <Link to={`${location.pathname}/following`}>
          <p>
            <span>{response.following.length}</span> <span>Following</span>
          </p>
        </Link>
      </div>
      <div>
        <Link to={`${location.pathname}/followers`}>
          <p>
            <span>{response.followers.length}</span> <span>Followers</span>
          </p>
        </Link>
      </div>
    </FollowFlex>
  );
};

export default Follower;
