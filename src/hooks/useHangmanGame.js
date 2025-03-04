import { useState } from 'react'
import { getRandomWord } from '../utils/words'

export const useHangmanGame = () => {
  const [word, setWord] = useState(getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])
  const maxAttempts = 6

  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.includes(letter)
  )
}
