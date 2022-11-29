import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function UserProfileCard({ profileUrl }) {
    const [userProfile, setuserProfile] = useState({});
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        if (localStorage.getItem(profileUrl)) {
            setuserProfile(JSON.parse(localStorage.getItem(profileUrl)));
            setisLoading(false);
            console.log("Got From Local Storage !");
            return;
        }
        fetch(profileUrl)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setuserProfile(res);
                localStorage.setItem(profileUrl, JSON.stringify(res));
                setisLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [profileUrl])
    return (
        <div className='shadow-dark-inset p-5 min-h-fit'>
            {
                isLoading ?
                    <div> Loading... </div>
                    :
                    <div className='flex flex-wrap justify-center space-x-10 items-center'>
                        <div className="xl:w-[330px] lg:w-[300px] md:w-[350px] sm:w-[300px]">
                            <img src={userProfile.avatar_url} alt="profile" className="rounded-xl" />
                        </div>
                        <div className='h-[300px] pt-10 text-gray'>
                            <Link to={`/profile/${userProfile.login}`} className="bg-button text-white px-5 py-1 rounded-lg text-sm font-normal">View Full Profile {"->"}</Link>

                            <h2 className="font-bold lg:text-xl md:text-lg text-white">{userProfile.name} <span className="font-normal lg:text-lg md:text-sm text-gray">(username : {userProfile.login})</span></h2>

                            <h5 className="mt-1 font-semibold lg:text-lg md:text-sm">{userProfile.bio}</h5>
                            <div className='mt-10 flex justify-between items-center font-normal flex-wrap space-x-9'>
                                <div>Public Repositories : {userProfile.public_repos}</div>
                                <div>
                                    Followers : {userProfile.followers}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default UserProfileCard;
