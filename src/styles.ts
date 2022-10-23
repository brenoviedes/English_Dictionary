import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin: auto;

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const SearchDiv = styled.div`
  justify-content: flex-end;
  display: flex;
  background-color: var(--light);

  @media only screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 40px;
  outline: none;
  padding: 0 10px;
  font-size: 100%;
  border: 1px solid var(--dark);
  color: var(--dark);
  font-family: 'regular';
  background-color: var(--light);

  @media only screen and (max-width: 380px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  width: auto;
  padding: 0 10px;
  height: 42px;
  border: none;
  border: 1px solid var(--dark);
  border-left: none;
  background-color: var(--blue);
  cursor: pointer;
  color: var(--light);
`;

export const WordNotFound = styled.span`
  justify-content: center;
  display: flex;
  font-family: 'regular';
  margin-top: 100px;
  font-size: 150%;
  color: var(--dark);
`;