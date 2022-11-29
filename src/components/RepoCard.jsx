import React from 'react'

function RepoCard({ repoInfo }) {
   // console.log(repoInfo);
    return (
        <div className='shadow-dark-box mb-5 p-3 rounded-lg'>
            <div className='flex justify-between flex-wrap'>
                <h1 className='text-lg text-light-gray font-semibold'>{repoInfo.name}</h1>
                <a className='text-sm text-gray' target={"_blank"} rel="noreferrer" href={repoInfo.html_url}>Github Link</a>
            </div>
            {repoInfo.description && <h3 className='text-sm text-gray font-normal mt-[1px]'>{repoInfo.description}</h3>}
            <div className='text-sm text-gray font-normal mt-2'>
                updated on {repoInfo.updated_at}
            </div>
        </div>
    )
}

export default RepoCard
