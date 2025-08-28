import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Result = ({ title, amount }) => <p>{title} {amount}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => setGood(good + 1)} text='good'/>
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
        <Button onClick={() => setBad(bad + 1)} text='bad'/>
      </div>
      <h2>statistics</h2>
      <div>
        <Result title='good' amount={good} />
        <Result title='neutral' amount={neutral} />
        <Result title='bad' amount={bad} />
      </div>
    </div>
  )
}

export default App