import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styledPages';
import { useHistory } from 'react-router-dom';

function Home(props) {
  const history = useHistory();
  const [ user, setUser ] = useState('');
  const [ error, setError ] = useState(false);
  
    function handleChange() {
      axios.gel(`https://api.github.com/${user}/repos`)
        .then((response)=> {
          const repositories = response.data;
          const repositoriesName = [];
          repositories.map((repository) => {
            repositoriesName.push(repository.name);
          });
          localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
          setError(false);
          history.push(`./Reports.js`)
        })
        .catch(error => {
          setError(true)
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
      { error ? <S.ErrorMessage>Something went wrong</S.ErrorMessage> : ''}
    </div>
  )
}

export default Home
