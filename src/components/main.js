import React from 'react'
import Tile from './tiles'
import Bar from './bar'
import Line from './line'

export default class Main extends React.Component {
  init = {
    wining_pick: [],
    win: null,
    count: 0,
    game: false,
    current: Math.random() >= 0.5 ? 'x' : 'o',
    x: { pick: [], symbol: 'x' },
    o: { pick: [], symbol: 'o' }
  }
  score = { x: 0, o: 0, tie: 0 }

  state = { ...this.init, game: true }

  winning = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]

  checkWining_logic = () => {
    const player = this.state.current === 'x' ? this.state.x : this.state.o
    for (let index = 0; index < this.winning.length; index++) {
      let check = true
      this.winning[index].forEach(num => {
        if (!player.pick.includes(num)) check = false
      })
      if (check) {
        this.setState({ wining_pick: this.winning[index] })
        return true
      }
    }
    return false
  }

  refresh = () => {
    this.setState(this.init, () => {
      this.setState({ game: true, current: Math.random() >= 0.5 ? 'x' : 'o' })
    })
  }

  checkWining = pos => {
    const player = this.state.current === 'x' ? this.state.x : this.state.o
    this.setState(
      {
        [player.symbol]: {
          ...player,
          pick: [...player.pick, pos]
        }
      },
      () => {
        if (this.checkWining_logic()) {
          setTimeout(() => {
            this.score[player.symbol]++
            this.setState({ win: player.symbol })
          }, 100)
        } else if (this.state.count > 8) {
          setTimeout(() => {
            this.setState({ win: 'Draw' })
          }, 100)
        } else {
          this.toggle()
        }
      }
    )
  }

  toggle = () => {
    if (this.state.current === 'x') {
      this.setState({ current: 'o' })
    } else {
      this.setState({ current: 'x' })
    }
  }

  getCurrent = () => {
    this.setState(function(state, props) {
      return { count: state.count + 1 }
    })
    return this.state.current
  }

  createTile = range => {
    return (
      <div className="flex bg-gray-300 mb-1">
        {range.map(num => {
          return (
            <Tile
              key={'tile' + num}
              getCurrent={this.getCurrent}
              pos={num}
              checkWining={this.checkWining}
              win={this.state.win}
            />
          )
        })}
      </div>
    )
  }

  createLine = () => {
    return this.state.wining_pick.length > 0 ? (
      <Line wining_pick={this.state.wining_pick} win={this.state.win} />
    ) : null
  }

  render() {
    return this.state.game ? (
      <div className="absolute shadow-lg inset-auto p-10 bg-gray-200">
        <p className="mb-1">
          Tic Tac Toe by
          <a
            href="https://github.com/mos311063"
            className="text-gray-600 hover:text-blue-700 ml-1"
          >
            Moss
          </a>
        </p>
        <Bar
          current={this.state.current}
          score={this.score}
          win={this.state.win}
          refresh={this.refresh}
        />
        {this.createLine()}
        {this.createTile([1, 2, 3])}
        {this.createTile([4, 5, 6])}
        {this.createTile([7, 8, 9])}
        <div className="flex  mt-2 p-2 content-center justify-center">
          <button
            onClick={() => this.refresh()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            re-game
          </button>
        </div>
      </div>
    ) : (
      <button
        onClick={() => this.setState({ game: true })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-2"
      >
        tic tac toe
      </button>
    )
  }
}
