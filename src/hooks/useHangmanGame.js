import { useState } from 'react'
import { getRandomWord } from '../utils/words'

export const useHangmanGame = (category = 'all') => {
  const [word, setWord] = useState(getRandomWord(category))
  const [guessedLetters, setGuessedLetters] = useState([])
  const maxAttempts = 6

  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.includes(letter)
  )

  const attemptsRemaining = maxAttempts - incorrectLetters.length

  const isGameOver =
    attemptsRemaining <= 0 ||
    word.split('').every((letter) => guessedLetters.includes(letter))

  const isWin = word
    .split('')
    .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter])
    }
  }

  const restartGame = () => {
    setWord(getRandomWord(category))
    setGuessedLetters([])
  }

  return {
    word,
    guessedLetters,
    attemptsRemaining,
    isGameOver,
    isWin,
    addGuessedLetter,
    restartGame,
  }
}
