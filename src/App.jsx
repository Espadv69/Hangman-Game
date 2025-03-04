import { useState } from 'react'
import { useHangmanGame } from './hooks/useHangmanGame'

import Header from './components/Header/Header'
import WordDisplay from './components/WordDisplay/WordDisplay'
import KeyBoard from './components/Keyboard/Keyboard'
import AttemptsCounter from './components/AttemptsCounter/AttemptsCounter'
import GameOverModal from './components/GameOverModal/GameOverModal'
import RestartButton from './components/RestartButton/RestartButton'

const App = () => {
  const {
    word,
    guessedLetters,
    attemptsRemaining,
    isGameOver,
    isWin,
    addGuessedLetter,
    restartGame,
  } = useHangmanGame()

  return (
    <div className="app">
      <Header />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <AttemptsCounter attempts={attemptsRemaining} />
      <KeyBoard
        guessedLetters={guessedLetters}
        onLetterClick={addGuessedLetter}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <GameOverModal isWin={isWin} word={word} onRestart={restartGame} />
      )}
      <RestartButton onRestart={restartGame} />
    </div>
  )
}

export default App
