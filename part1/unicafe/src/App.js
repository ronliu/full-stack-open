import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // gives average score (good: 1, neutral: 0, bad: -1)
  const average = (good, neutral, bad) => {
    const count = good + neutral + bad
    const score = good - bad
    return score / count
  }

  // gives percentage of positive feedback
  const getPositive = (good, neutral, bad) => {
    const count = good + neutral + bad
    return (good / count) * 100
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average {average(good, neutral, bad)}</p>
      <p>Positive {getPositive(good, neutral, bad)} %</p>
    </div>
  )
}

export default App
