// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData();
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch("https://api.github.com/users/pushpendraa3")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])
  return (
    <div>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
      <img className='text-center' src={data.avatar_url} alt="github image" width={300}/>
      </div>
      
    </div>
  )
}

export default Github

export const loadGithubData = async () => {
  const res = await fetch("https://api.github.com/users/pushpendraa3")
  const response = res.json();
  return response;
}