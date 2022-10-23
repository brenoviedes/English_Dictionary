type Definition = {
    definition: string 
}

export type Meanings = {
    partOfSpeech: string 
    definitions: Definition[]
}

export default class Word {
    word: string = ''
    meanings: Meanings[] = []  

    constructor(obj: any) {
        const {
            word,
            meanings
        } = obj

        this.word = word
        this.meanings = meanings.forEach(({partOfSpeech, definitions}: any) => {
            return {
                partOfSpeech,
                definitions: definitions.forEach(({item}: any) => {
                    return {item}
                })
            }
        })
    }
} 