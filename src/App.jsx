import { useState } from 'react'

import Header from './components/Header/Header'
import WordDisplay from './components/WordDisplay/WordDisplay'
import KeyBoard from './components/Keyboard/Keyboard'

const App = () => {
  const [word] = useState('REACT') // Word to guess
  const [guessedLetters, setGuessedLetters] = useState([]) // Store guessed letters

  return (
    <div className="app">
      <Header />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
    </div>
  )
}

export default App
