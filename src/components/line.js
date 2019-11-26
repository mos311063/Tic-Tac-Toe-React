import React from 'react'

const Line = props => {
  let start_col = 10
  let start_row = 50
  let end_col = 50
  let end_row = 295
  start_col = 10
  start_row = 250
  end_col = 295
  end_row = 250
  if (props.wining_pick.length > 0) {
    switch (props.wining_pick[0]) {
      case 1:
        switch (props.wining_pick[2]) {
          case 3:
            start_col = 10
            start_row = 50
            end_col = 295
            end_row = 50
            break
          case 7:
            start_col = 50
            start_row = 10
            end_col = 50
            end_row = 295
            break
          case 9:
            start_col = 30
            start_row = 30
            end_col = 280
            end_row = 280
            break
          default:
            break
        }
        break
      case 2:
        switch (props.wining_pick[2]) {
          case 8:
            start_col = 153
            start_row = 10
            end_col = 153
            end_row = 295
            break
          default:
            break
        }
        break
      case 3:
        switch (props.wining_pick[2]) {
          case 7:
            start_col = 20
            start_row = 290
            end_col = 290
            end_row = 20
            break
          case 9:
            start_col = 257
            start_row = 10
            end_col = 257
            end_row = 295
            break
          default:
            break
        }
        break
      case 4:
        switch (props.wining_pick[2]) {
          case 6:
            start_col = 10
            start_row = 155
            end_col = 295
            end_row = 155
            break
          default:
            break
        }
        break
      case 7:
        switch (props.wining_pick[2]) {
          case 9:
            start_col = 10
            start_row = 257
            end_col = 295
            end_row = 257
            break
          default:
            break
        }
        break
      default:
        break
    }
  }

  const storke_color = props.win === 'x' ? '#feb2b2' : '#90cdf4'

  return (
    <svg className="line">
      <g fill="none">
        <path
          stroke={storke_color}
          strokeLinecap="butt"
          strokeWidth="7"
          d={`M${start_col} ${start_row} ${end_col} ${end_row}`}
        />
      </g>
    </svg>
  )
}
export default Line
