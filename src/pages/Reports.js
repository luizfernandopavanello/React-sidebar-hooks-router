import React from 'react';
import * as S from './styledPages';

export default function Reports() {
  return (
    <div className="reports">
      <S.Container>
        <S.Title>Reports - User</S.Title>
        <S.List>
          <S.ListItem>Reports: Name Report 1</S.ListItem>
          <S.ListItem>Reports: Name Report 2</S.ListItem>
          <S.ListItem>Reports: Name Report 3</S.ListItem>
        </S.List>
      </S.Container>
    </div>
  );
}
