import React, { useState } from 'react';
import axios from 'axios';

function Home(props) {
  const [ user, setUser ] = useState('');
  
    function handleChange() {
      axios.gel(`https://api.github.com/${user}`).then((response)=> {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      });
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
