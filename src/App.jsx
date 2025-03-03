import { useState } from 'react'

import Header from './components/Header/Header'
import WordDisplay from './components/WordDisplay/WordDisplay'

const App = () => {
  // Simulate a word to guess
  const [word] = useState('REACT')
  const [guessedLetters] = useState(['R', 'E'])

  return (
    <div className="app">
      <Header />
    </div>
  )
}

export default App
