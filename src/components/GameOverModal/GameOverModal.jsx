const GameOverModal = ({ isWin, word, onRestart }) => {
  return (
    <div className="game-over-modal">
      <div className="modal-content">
        <h2>{isWin ? 'You won! 🎉' : 'Game Over 😢'}</h2>
        {!isWin && (
          <p>
            The word was: <strong>{word}</strong>
          </p>
        )}
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  )
}

export default GameOverModal
