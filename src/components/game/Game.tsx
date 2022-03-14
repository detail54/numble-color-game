import React, { useEffect, useState } from 'react'
import Count from './Count'

const Game: React.FC = () => {
  const [ stage, setStage ] = useState<number>(1)
  const [ time, setTime ] = useState<number>(15)
  const [ score, setScore ] = useState<number>(0)

  useEffect(() => {
    if (time >= 0) {
      const timer = setTimeout(() => {
        setTime(time - 1)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      if (score > 0) {
        alert(`
          Game Over
          Stage ${stage}, Score: ${score}
        `)
      } else {
        alert('Game Over')
      }
      setTime(15)
      setStage(1)
      setScore(0)
    }
  }, [time])
  
  return (
    <Count stage={stage} time={time} score={score} />
  )
}

export default Game