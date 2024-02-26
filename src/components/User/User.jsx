import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { userID } = useParams();
  return (
    <div className='text-center bg-slate-500 p-4 m-12'>
      User: {userID}
      <p className='text-[10px]'>Change '200' in url to any desired value</p>
    </div>
  )
}

export default User
