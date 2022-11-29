import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const [keyWord, setkeyWord] = useState("");
    const navigate = useNavigate();
    const goToSearchPage = () => {
        setkeyWord(keyWord.trim());
        if (keyWord.length === 0) {
            alert("Please Type Something .");
            return;
        }
        if (keyWord.split(" ").length > 1) {
            alert("Please Type a user name only (do not give space between words)");
            return;
        }
        navigate(`/search/${keyWord}`);
        return;
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='shadow-dark-box p-10 rounded-lg w-[90%]'>
                <div className='mb-10 font-extrabold text-2xl text-center text-gray'>Welcome To GitHub User Interface</div>
                <div className='flex justify-center lg:justify-between  items-center flex-wrap'>
                    <input
                        type="text"
                        className='shadow-dark-inset bg-transparent outline-none px-10 py-2 text-lg rounded-lg w-[100%] lg:w-[80%]'
                        value={keyWord}
                        placeholder={"Type a Github User Name ... "} onChange={(e) => { setkeyWord(e.target.value) }} />
                    <button
                        className='bg-button px-10 py-2 rounded-lg text-lg font-bold mt-5 lg:mt-0'
                        onClick={goToSearchPage}
                    >Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
