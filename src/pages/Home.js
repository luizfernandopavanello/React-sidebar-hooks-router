import React, { useState } from 'react';
import axios from 'axios';

function Home(props) {
  const [ user, setUser ] = useState('');
  
    function handleChange() {
      axios.gel(`https://api.github.com/${user}`).then((response)=> {
        console.log(response);
      })
    }
  
    return (
    <div className="home">
      <h1>Home</h1>
      <input 
        type="text"
        id='user'
        className='userInput'
        placeholder='User'
        value={user}
        onChange={ event => setUser(event.target.value) } 
      />
      <button 
        type='button'
        onCLick={handleChange}
      >Search</button>
    </div>
  )
}

export default Home
