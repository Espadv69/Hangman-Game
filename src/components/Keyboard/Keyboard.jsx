import './Keyboard.css'

const KeyBoard = ({ guessedLetters, onLetterClick, isGameOver }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={guessedLetters.includes(letter) || isGameOver}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default KeyBoard
