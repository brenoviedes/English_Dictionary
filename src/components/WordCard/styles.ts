import styled from 'styled-components';

export const DivWordCard = styled.div`
  display: flex-column;
`;

export const TitleWord = styled.h1`
  font-family: 'bold';
  font-size: 280%;
  color: var(--dark);
  margin-top: 50px;
  text-align: center;
  `;

export const Meaning = styled.div`
  
`;

export const PartOfSpeech = styled.div`
  font-family: 'bold';
  border-top: 1px solid var(--dark);
`;

export const DefinitionContent = styled.div`
  &:before {
    content: "\\27A5  ";
  }
  font-family: 'regular';
  margin: 10px 0px 10px 30px;

  @media only screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;