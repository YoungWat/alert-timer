import React, { Component, Fragment } from "react"
import TimeDisplay from "./components/time_display"
import TimeSetter from "./components/time_setter"

import "./reset.scss"
import "./app.scss"

import utils from "./common/utils"

let tickCb = null

class App extends Component {
  constructor() {
    super()

    this.state = {
      nowDate: new Date(),
      leftTime: 0,
      timeSetterInfo: {
        h: 0,
        m: 0,
        s: 3,
      },
    }
  }

  tickTime = () => {
    const tick = () => {
      setTimeout(() => {
        this.setState({
          nowDate: new Date(),
        })
        tick()
        tickCb && tickCb()
      }, 1000)
    }

    tick()
  }

  componentDidMount = () => {
    this.tickTime()
  }

  clickSetterHandler = () => {
    this.setState({
      leftTime: utils.transInfo2DateMs(this.state.timeSetterInfo),
    })
    tickCb = () => {
      this.setState(
        {
          leftTime: this.state.leftTime - 1000,
        },
        () => {
          if (this.state.leftTime === 0) {
            alert("done")
          }
        }
      )
    }
  }

  timeSetterChangeHandler = (info) => {
    this.setState({
      timeSetterInfo: info,
    })
  }

  render() {
    return (
      <Fragment>
        <div className="now-time-wrapper">
          <span className="now-time">当前时间</span>
          <TimeDisplay date={this.state.nowDate} />
        </div>
        <div className="time-setter-wrapper">
          <div>设置计时</div>
          <TimeSetter
            info={this.state.timeSetterInfo}
            onChange={this.timeSetterChangeHandler}
          >
            <button onClick={this.clickSetterHandler}>设置</button>
          </TimeSetter>
        </div>
        <div className="left-time-wrapper">
          <span className="left-time">剩余时间</span>
          <TimeDisplay date={this.state.leftTime} />
        </div>
      </Fragment>
    )
  }
}

export default App
