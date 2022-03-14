import React from 'react'
import Styled from 'styled-components'

const Box = Styled.div`
  margin: 2px;
  width: ${(props: IProps) => `${props.size}px`};
  height: ${(props: IProps) => `${props.size}px`};
`
interface IProps {
  size: number
  onClick: () => void
}

const ColorBox: React.FC<IProps> = (props) => {

  const { size, onClick } = props

  return (
    <Box size={size} onClick={onClick} />
  )
}

export default ColorBox