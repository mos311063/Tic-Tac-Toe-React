import React from 'react'

export default class Tile extends React.Component {
  state = {
    fill: ''
  }

  render() {
    const { getCurrent } = this.props
    return (
      <div
        className="flex-1 bg-gray-100 mr-1 "
        onClick={() => {
          if (this.state.fill === '') {
            if (this.props.win === null) {
              this.setState({ fill: getCurrent() })
              this.props.checkWining(this.props.pos)
            }
          }
        }}
      >
        <svg
          className="fill-current text-teal-600 hover:bg-teal-100  "
          width="100"
          height="100"
        >
          <g>
            <rect
              width="100"
              height="100"
              fill="transparent"
              fillOpacity="0"
              className="hover:bg-teal-600 "
            />
            <text x="40" y="60" fontSize="35">
              {this.state.fill}
            </text>
          </g>
        </svg>
      </div>
    )
  }
}

// export default Tile;
