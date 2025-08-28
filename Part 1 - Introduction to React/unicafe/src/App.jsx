import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ title, value }) => {
  return(
    <tr>
      <td>{title}</td>
      <td>{value}</td>
    </tr>

  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0){
    return (
      <div>
        <h2>statistics</h2>
        <div>
          <p>No feedback given</p>
        </div>
      </div>
    )
  }

  else {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine title='good' value={good} />
            <StatisticLine title='neutral' value={neutral} />
            <StatisticLine title='bad' value={bad} />
            <StatisticLine title='all' value={all} />
            <StatisticLine title='average' value={(good - bad) / all} />
            <StatisticLine title='positive' value={(good / all) * 100 + ' %'} />
          </tbody>
        </table>
      </div>
    )
  }
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App