import React, { useCallback, useEffect, useState } from 'react'
import Count from './Count'
import ColorBoxes from './ColorBoxes'

const Game: React.FC = () => {
  const [ stage, setStage ] = useState<number>(1)
  const [ time, setTime ] = useState<number>(15)
  const [ score, setScore ] = useState<number>(0)

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      setTime(time - 1)
      gameOver()
    }
  }, [time])

  const gameOver = useCallback(() => {
    if (score > 0) {
      alert(`Game Over \nStage ${stage}, Score: ${score}`)
    } else {
      alert('Game Over')
    }
    setTime(15)
    setStage(1)
    setScore(0)
  }, [stage])

  const correctChoice = useCallback(() => {
    setStage(stage + 1)
    setScore(Math.pow(stage, 3) * time)
    setTime(15)
  }, [stage])

  return (
    <>
      <Count stage={stage} time={time} score={score} />
      <ColorBoxes stage={stage} correctChoice={correctChoice} gameOver={gameOver} />
    </>
  )
}

export default Game