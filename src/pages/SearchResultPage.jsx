import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import UserProfileCard from '../components/UserProfileCard';

function SearchResultPage() {
    const { keyWord } = useParams();
    const [isLoading, setisLoading] = useState(true);
    const [usersList, setusersList] = useState([]);

    useEffect(() => {
        const query = keyWord.split(" ").join("+");
        if (localStorage.getItem(query)) {
            setusersList(JSON.parse(localStorage.getItem(query)));
            setisLoading(false);
            console.log("Fetching List From Local Storage .");
            return;
        }
        fetch(`https://api.github.com/search/users?q=${query} type:user in:login &per_page=4`)
            .then(res => res.json())
            .then(res => {
                console.log(res.items);
                localStorage.setItem(query, JSON.stringify(res.items));
                setusersList(res.items);
                setisLoading(false);
            })
            .catch(err => console.log(err))
    }, [keyWord])

    return (
        <div>
            {isLoading ?
                <div className='text-light-gray font-bold text-4xl flex justify-center items-center min-h-screen'>
                    Plaese wait we are fetching the data ..
                </div>
                :
                <div className='p-5'>
                    <div className='text-center font-extrabold text-2xl text-light-gray p-10'>
                        Search Results for your query
                    </div>
                    <div className='text-light-gray font-bold text-xl  grid grid-cols-1 gap-10'>
                        {
                            usersList.map((item, id) => {
                                return <UserProfileCard key={id} profileUrl={item.url
                                } />
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchResultPage
