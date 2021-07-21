import React, { useEffect, useState } from 'react';
import * as S from './styledPages';

export default function Reports() {
  const [ repositories, setRepositories ] = useState([]);
  
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
    localStorage.clear();
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
