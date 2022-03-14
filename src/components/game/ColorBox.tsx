import React from 'react'
import Styled from 'styled-components'

const Box = Styled.div`
  margin: 2px;
  width: ${(props: IProps) => `${props.size}px`};
  height: ${(props: IProps) => `${props.size}px`};
  background-color: ${(props: IProps) => `rgb(${props.r},${props.g},${props.b})`};
`
interface IProps {
  size: number
  r: number
  g: number
  b: number
  onClick: () => void
}

const ColorBox: React.FC<IProps> = (props) => {

  const { size, r, g, b, onClick } = props

  return (
    <Box 
      size={size} 
      r={r}
      g={g}
      b={b}
      onClick={onClick} 
    />
  )
}

export default ColorBox