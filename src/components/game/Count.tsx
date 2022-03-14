import React from 'react'
import Styled from 'styled-components'

const Wrap = Styled.header`
  width: 100%;
`

const Info = Styled.div`
  width: 150px;
  padding: 10px 20px;
  border: 1px solid green;
  border-radius: 15px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`

const Title = Styled.span`
  display: block;
  color: green;
`

const Content = Styled.span`
  display: block;
  color: green;
`

interface IProps {
  stage: number
  time: number
  score: number
}

const Count: React.FC<IProps> = (props) => {

  const { stage, time, score } = props

  return (
    <Wrap>
      <Info>
        <Title>스테이지</Title>
        <Content>{stage}</Content>
      </Info>
      <Info>
        <Title>남은시간</Title>
        <Content>{time}</Content>
      </Info>
      <Info>
        <Title>점수</Title>
        <Content>{score}</Content>
      </Info>
    </Wrap>
  )
}

export default Count