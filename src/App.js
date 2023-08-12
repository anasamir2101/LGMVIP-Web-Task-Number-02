import { useState, useEffect } from 'react';
import './App.css';
import Users from './Users';
const url = 'https://api.github.com/users';
console.log(url);

function App() {
  const [loading, setloading] = useState(true);
  const [users, setusers] = useState([]);

  const fetchusers = async () => {
    setloading(true);
    try {
      const response = await fetch(url);
      const users = await response.json();
      console.log(users);
      setloading(false);
      setusers(users);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchusers();
  }, []);

  if (loading) {
    return (
      <main className='loading'>
        <h1>Loading....</h1>
      </main>
    );
  }

  return (
    <main className='main'>
      <div>
        <Users users={users}></Users>
      </div>
    </main>
  );
}

export default App;
