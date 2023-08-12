import React from 'react';

const User = ({ id, login, avatar_url, html_url }) => {
  return (
    <>
      <ul className='list'>
        <li key={id}>
          <div className='imgage'>
            <img src={avatar_url} alt='' />
          </div>
          <div>
            <h5 className='name'>Name: {login}</h5>
            <button className='btn' href={html_url}>
              Profile
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default User;
