import { useState } from 'react'

import Header from './components/Header/Header'
import WordDisplay from './components/WordDisplay/WordDisplay'
import KeyBoard from './components/Keyboard/Keyboard'
import AttemptsCounter from './components/AttemptsCounter/AttemptsCounter'

const App = () => {
  const [word] = useState('REACT') // Word to guess
  const [guessedLetters, setGuessedLetters] = useState([]) // Store guessed letters

  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter])
    }
  }

  return (
    <div className="app">
      <Header />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <KeyBoard
        guessedLetters={guessedLetters}
        onLetterClick={handleLetterClick}
      />
    </div>
  )
}

export default App
