const KeyBoard = ({ guessedLetters, onLetterClick }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className="keyboard">
      {alphabet.split('').map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default KeyBoard
