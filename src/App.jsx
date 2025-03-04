import { useState } from 'react'

import Header from './components/Header/Header'
import WordDisplay from './components/WordDisplay/WordDisplay'
import KeyBoard from './components/Keyboard/Keyboard'
import AttemptsCounter from './components/AttemptsCounter/AttemptsCounter'
import GameOverModal from './components/GameOverModal/GameOverModal'

const App = () => {
  const [word] = useState('REACT') // Word to guess
  const [guessedLetters, setGuessedLetters] = useState([]) // Store guessed letters

  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter])
    }
  }

  // Calculate the number of attempts remaining
  const maxAttempts = 6
  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.includes(letter)
  )
  const attemptsRemaining = maxAttempts - incorrectLetters.length

  // Check if the game is over
  const isGameOver =
    attemptsRemaining <= 0 ||
    word.split('').every((letter) => guessedLetters.includes(letter))

  return (
    <div className="app">
      <Header />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <AttemptsCounter attempts={attemptsRemaining} />
      <KeyBoard
        guessedLetters={guessedLetters}
        onLetterClick={handleLetterClick}
      />
    </div>
  )
}

export default App
