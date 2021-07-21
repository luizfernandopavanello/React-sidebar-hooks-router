import React, { useEffect, useState } from 'react';
import * as S from './styledPages';
import { useHistory } from 'react-router-dom';

export default function Reports() {
  const history = useHistory();
  const [ repositories, setRepositories ] = useState([]);
  
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName !== null) {
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
    localStorage.clear();
    } else {
      history.push(`/`);
    }
  }, []);

  return (
    <div className="reports">
      <S.Container>
        <S.Title>Reports - User</S.Title>
        <S.List>
          { repositories.map(repository => {
            return (
              <S.ListItem> { repository } </S.ListItem>
            )
          }) }
        </S.List>
        <S.LinkHome to="/">Back</S.LinkHome>
      </S.Container>
    </div>
  );
}
