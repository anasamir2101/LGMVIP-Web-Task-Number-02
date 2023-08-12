import React from 'react';
import User from './User';

const Users = ({ users }) => {
  console.log(users);
  return (
    <section>
      <div className='title'>
        Github Users
        <div className='underline'></div>
      </div>
      <div className='single-user'>
        {users.map((user) => {
          return <User key={user.id} {...user}></User>;
        })}
      </div>
    </section>
  );
};

export default Users;
