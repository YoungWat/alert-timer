import React, { Component, Fragment } from "react"
import TimeDisplay from "./components/time_display"
import TimeSetter from "./components/time_setter"

import "./reset.scss"
import "./app.scss"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Fragment>
        <div className="now-time-wrapper">
          <span className="now-time">当前时间</span>
          <TimeDisplay />
        </div>
        <div className="time-setter-wrapper">
          <div>设置计时</div>
          <TimeSetter>
            <button>设置</button>
          </TimeSetter>
        </div>
        <div className="left-time-wrapper">
          <span className="left-time">剩余时间</span>
          <TimeDisplay />
        </div>
      </Fragment>
    )
  }
}

export default App
