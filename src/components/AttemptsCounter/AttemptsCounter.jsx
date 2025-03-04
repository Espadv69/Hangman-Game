import './AttemptsCounter.css'

const AttemptsCounter = ({ attempts }) => {
  return (
    <div className="attempts-counter">
      <p>
        Attempts remaining: <span>{attempts}</span>
      </p>
    </div>
  )
}

export default AttemptsCounter
