import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Follower from './follower';
import Icon from '../icon';
import ProfileHeader from '../profileHeader';
import { ProfileCorner, Info, Dates } from '../styles/profile';

const URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
    const [user, setUser] = useState(null);
    const { username } = useParams();

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${URL}/user/get-user?username=${username}`);
            setUser(res.data);
        })();
    }, [])

    if (user === null)
        return <div>Loading...</div>

    const dob = new Date(user.dob);
    const joinedAt = new Date(user.createdAt);
    const dobPath = [
        "M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z",
        "M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"
    ];
    const joinPath = ["M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"];

    return (
        <ProfileCorner>
            <ProfileHeader user={user} text="9 tweets" />
            <Info>
                <h2>{user.firstname} {user.lastname}</h2>
                <p>@{user.username}</p>
                <Dates>
                    <div>
                        <Icon d={dobPath} width="18.75" height="18.75" fill="rgb(101, 119, 134)" />
                        <span>Born {dob.toLocaleString('default', { month: 'long' })} {dob.getDate()}, {dob.getFullYear()}
                        </span>
                    </div>
                    <div>
                        <Icon d={joinPath} width="18.75" height="18.75" fill="rgb(101, 119, 134)" />
                        <span> Joined {joinedAt.toLocaleString('default', { month: 'long' })} {joinedAt.getFullYear()}</span>
                    </div>
                </Dates>
                <Follower user={user} />
            </Info>
        </ProfileCorner>
    );
}

export default Profile;
