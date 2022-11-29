import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Repositories from '../components/Repositories';

function UserProfile() {
    const { userName } = useParams();
    const profileUrl = `https://api.github.com/users/${userName}`;
    const [userProfile, setuserProfile] = useState({});
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        if (localStorage.getItem(profileUrl)) {
            setuserProfile(JSON.parse(localStorage.getItem(profileUrl)));
            console.log(JSON.parse(localStorage.getItem(profileUrl)));
            setisLoading(false);
            console.log("Got From Local Storage !");
            return;
        }
    }, [profileUrl])
    return (
        <div>
            {
                isLoading ? <div>Loading ...</div>
                    :
                    <div className='flex justify-center items-start p-10 flex-wrap lg:space-x-8'>
                        <div className='w-[100%] lg:w-[28%] mb-10 flex justify-center flex-col items-center text-gray'>
                            <img src={userProfile.avatar_url} alt="profile" className="rounded-full shadow-dark-box" />
                            <div className='mt-5'>
                                <h1 className='text-2xl font-bold  w-full'>{userProfile.name}</h1>
                                <h2 className='text-xl font-semibold  w-full'>{userProfile.login}</h2>
                                <h5 className='text-lg font-normal  w-full'>{userProfile.bio}</h5>
                                <div className='text-sm font-bold  w-full flex justify-start space-x-3 my-2'>
                                    <h6>{userProfile.followers} follower</h6>
                                    <h6> {userProfile.following} following</h6>
                                </div>
                                {
                                    userProfile.blog &&
                                    <div className='text-sm font-normal  w-full'>
                                        blog : <span> <a target={"_blank"} rel="noreferrer" href={userProfile.blog}>{userProfile.blog}</a></span>
                                    </div>
                                }
                                <div className='text-sm font-normal  w-full'>Open in Github : <span> <a target={"_blank"} rel="noreferrer" href={userProfile.html_url}>{userProfile.html_url}</a></span></div>
                            </div>
                        </div>
                        <div className='w-[100%] lg:w-[68%]'>
                            <div className='text-center text-2xl text-gray font-extrabold mb-10'>Public Repositories</div>
                            <Repositories url={userProfile.repos_url} />
                        </div>
                    </div>
            }
        </div>
    )
}

export default UserProfile
