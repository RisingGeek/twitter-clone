import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileHeader from '../profileHeader';
import { useParams } from 'react-router-dom';

const URL = process.env.REACT_APP_SERVER_URL;

const Following = () => {
    const [userData, setUserData] = useState(null);
    const { username } = useParams();
    useEffect(() => {
        (async () => {
            const user = await axios.get(`${URL}/user/get-user?username=${username}`);
            const res = await axios.get(`${URL}/follow/details?id=${user.data.id}`);
            setUserData({ user: user.data, following: res.data.following });
        })();
    }, []);

    if (!userData)
        return <div>Loading...</div>

    return (
        <div>
            <ProfileHeader user={userData.user} text={`@${userData.user.username}`} />
        </div>
    );
}

export default Following;