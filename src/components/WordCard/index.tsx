import { useState } from "react"
import Word from "../../models/Word"
import { Meanings } from "../../models/Word"
import {
    Meaning,
    DivWordCard,
    PartOfSpeech,
    DefinitionContent
  } from './styles'

const WordCard  = ({word}: {word: Word}) => {
    const [meanings] = useState<Meanings[]>(word.meanings)

    return (
        <DivWordCard>
      {meanings.map(({ partOfSpeech, definitions }) => {

        return (
          <Meaning>
            <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
            {definitions.map(({ definition}) => {
              return (
                    <DefinitionContent>{definition}</DefinitionContent>
              )
            })}
          </Meaning>
        )
      })}
    </DivWordCard>
    )

}

export default WordCard