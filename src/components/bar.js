import React from 'react'
import styled from 'styled-components'

const BarS = styled.div`
  background-color: ${props =>
    props.bg === 'x' ? '#feb2b2' : props.bg === 'o' ? '#90cdf4' : '#81e6d9'};
`
const BarActiveX = styled.div`
  background-color: ${props => (props.bg === 'x' ? '#feb2b2' : '#e2e8f0')};
`

const BarActiveO = styled.div`
  background-color: ${props => (props.bg === 'o' ? '#90cdf4' : '#e2e8f0')};
`

const turnBar = props => {
  let color
  if (props.win === 'x') {
    color = 'bg-red-300'
  } else if (props.win === 'o') {
    color = 'bg-blue-300'
  } else {
    color = 'bg-teal-300'
  }

  if (props.win === null) {
    return (
      <span className="font-bold font-mono text-lg text-teal-600">
        {props.current} turn
      </span>
    )
  } else {
    return (
      <span
        className={`font-bold font-mono text-lg text-gray-100 win-bar ${color}`}
        onClick={props.refresh}
      >
        {props.win !== 'Draw' ? props.win + ' won' : ' xo draw '}
      </span>
    )
  }
}

const Bar = props => {
  const { x, o } = props.score
  let current = props.current
  if (props.win !== null) {
    current = props.win
  }
  return (
    <>
      <div className="flex">
        <BarActiveX
          className="flex-1 text-center p-1 font-bold mb-1 mr-1"
          bg={current}
        >
          x : {x === 0 ? '-' : x}
        </BarActiveX>
        <BarActiveO
          className="flex-1 text-center p-1 font-bold mb-1 ml-1"
          bg={current}
        >
          o : {o === 0 ? '-' : o}
        </BarActiveO>
      </div>
      <BarS className="text-center p-2  mb-1" bg={current}>
        {turnBar(props)}
      </BarS>
    </>
  )
}
export default Bar
