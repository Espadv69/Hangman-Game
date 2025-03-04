import './AttemptsCounter.css'

const AttemptsCounter = ({ attempts }) => {
  return (
    <div className="attempts-counter">
      <p>Attempts remaining: {attempts}</p>
    </div>
  )
}

export default AttemptsCounter
