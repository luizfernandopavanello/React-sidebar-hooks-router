import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #fff;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`
export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #000;
  color: #fff;
  padding: 0.5rem;
`
export const LinkHome = styled(Link)`
  display: block;
  width: 2rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;
`