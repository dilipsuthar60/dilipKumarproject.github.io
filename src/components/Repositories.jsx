import React, { useState, useEffect } from 'react'
import RepoCard from './RepoCard';

function Repositories({ url }) {
    const [repoList, setrepoList] = useState(null);
    useEffect(() => {
        if (localStorage.getItem(url)) {
            setrepoList(JSON.parse(localStorage.getItem(url)));
            // console.log(JSON.parse(localStorage.getItem(url)));
            console.log("Fetched repo list from local storage !");
            return;
        }
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setrepoList(res);
                localStorage.setItem(url, JSON.stringify(res));
            })
            .catch(err => console.log(err));
    }, [url])
    return (
        <div>
            {
                repoList &&
                <div>
                    {
                        repoList.map((item, id) => {
                            return <RepoCard key={id} repoInfo={item} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Repositories
