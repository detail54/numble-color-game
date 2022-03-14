import React from 'react'
import ColorBox from './ColorBox'
import Styled from 'styled-components'

const BoxesWrap = Styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 360px;
  height: 360px;
  border: 1px solid black;
`

interface IProps {
  stage: number
  correctChoice: () => void
  gameOver: () => void
}

const ColorBoxes: React.FC<IProps> = (props) => {
  
  const { stage, correctChoice, gameOver } = props

  // 박스 틀 크기
  const boxesWrapSize: number = 360
  // 생성해야할 상자 갯수만큼 배열 생성/번호 초기화
  const boxesCount: number[] = Array.from(
    { length: Math.pow(Math.round((stage + 0.5) / 2) + 1, 2) }, 
    (value: number, index: number) => index + 1
  )
  // 생성해야할 상자 갯수 제곱근 (상자 사이즈 계산 목적)
  const squareRoot: number = Math.sqrt(boxesCount.length)
  // 상자 사이즈 (정사각형임)
  const boxSize: number = Math.round((boxesWrapSize / squareRoot - 4) * 1000) / 1000
  // 상자 갯수중 정답 번호
  const correctNumber: number = Math.floor(Math.random() * boxesCount.length) + 1

  // 랜덤 rgb 생성
  const randomColorR: number = Math.floor(Math.random() * 256);
  const randomColorG: number = Math.floor(Math.random() * 256);
  const randomColorB: number = Math.floor(Math.random() * 256);

  // 상자 컴포넌트 생성
  const createBoxes = boxesCount.map((number: number, index: number) => {
    if (number === correctNumber) {
      return (
        <ColorBox 
          key={number} 
          size={boxSize} 
          r={randomColorR - 24}
          g={randomColorG - 24}
          b={randomColorB - 24}
          onClick={correctChoice} 
        />
      )
    } else {
      return (
        <ColorBox 
          key={number} 
          size={boxSize} 
          r={randomColorR}
          g={randomColorG}
          b={randomColorB}
          onClick={gameOver} 
        />
      )
    }
  })

  return (
    <BoxesWrap>{createBoxes}</BoxesWrap>
  )
}

export default React.memo(ColorBoxes)