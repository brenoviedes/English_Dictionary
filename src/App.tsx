import { useState } from "react";
import Word from "./models/Word";
import api from "./service/api";
import WordCard from "./components/WordCard";
import { TitleWord } from "./components/WordCard/styles";
import {
    Container,
    SearchDiv,
    SearchInput,
    SearchButton,
    WordNotFound,
  } from './styles';
import Header from "./components/Header";

  const App = () => {

    const [word, setWord] = useState<string>('')
    const [words, setWords] = useState<Word[]>([])
    const [notFound, setNotFound] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    
    const searchWords = async () => {
      
        setWords([])
        setNotFound('')
        try {
            const response = await api.get('/entries/en/' + word.trim().toLowerCase())
            let words = response.data
            setWords(words)
            setTitle(word)
        } catch(error) {    
            setNotFound(`Ops, não encontramos a palvra ' ${word} ' :( `)
            setTitle(word)
        }
    }

    return (
        <Container>
            <Header></Header>
            <SearchDiv>
                <SearchInput 
                    placeholder='Busque por alguma plavra'
                    value={word.trim().toLowerCase()}
                    onChange={(event) => setWord(event.target.value)} />        
                <SearchButton onClick={searchWords}>
                    <span>Buscar</span>
                </SearchButton>
            </SearchDiv>
            <TitleWord>{title.trim().toLowerCase()}</TitleWord>
            {words.map((word: Word, index) => <WordCard key={index} word={word} />) }
            <WordNotFound>{notFound}</WordNotFound>
        </Container>
    )
  }

  export default App