import React, { Component, Fragment } from "react"
import TimeDisplay from "./components/TimeDisplay"
import TimeSetter from "./components/TimeSetter"
import QuickTimeSetter from "./components/QuickTimeSetter"

import "./reset.scss"
import "./app.scss"

import utils from "./common/utils"

let tickCb = null
let oldTickCb = null
let alerted = false

// 暂停开始时间
let pauseStartDate = null
class App extends Component {
  constructor() {
    super()

    this.state = {
      nowDate: new Date(),
      leftTime: null,
      // 预计结束的时间
      endTime: null,
      timeSetterInfo: {
        h: 0,
        m: 0,
        s: 0,
      },
      pauseStatus: 1,
      quickTimeSetterLists: [{ m: 5 }, { m: 10 }, { m: 30 }, { h: 1 }],
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

  reset = () => {
    tickCb = null
    this.setState({
      leftTime: null,
      timeSetterInfo: utils.formateInfo(0),
    })
  }
  componentDidMount = () => {
    this.tickTime()

    window.onbeforeunload = (event) => {
      if (event) {
        event.returnValue = "关闭提示"
      }
    }
  }

  clickSetterHandler = () => {
    const countFn = () => {
      alerted = false
      this.setState({
        leftTime: utils.transInfo2DateMs(this.state.timeSetterInfo),
        endTime: Date.now() + utils.transInfo2DateMs(this.state.timeSetterInfo),
        pauseStatus: 1,
      })
      tickCb = () => {
        this.setState(
          {
            leftTime: this.state.endTime - Date.now(),
          },
          () => {
            if (this.state.leftTime <= 0) {
              if (!alerted) {
                alert("done")
                alerted = true
              }
            }
          }
        )
      }
    }
    // 正在倒计时
    if (tickCb) {
      const res = window.confirm("正在倒计时中，是否重新设置计时时间？")
      res && countFn()
    } else {
      countFn()
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
          <QuickTimeSetter
            lists={this.state.quickTimeSetterLists}
            onSetTime={(info) => {
              this.setState({
                timeSetterInfo: utils.transMs2Date(
                  utils.transInfo2DateMs(this.state.timeSetterInfo) +
                    utils.transInfo2DateMs(info)
                ),
              })
            }}
          />
          <div className="control-btn-list">
            <button onClick={this.clickSetterHandler}>设置</button>
            <button
              onClick={() => {
                // 当前按钮 显示为暂停
                const isPause = this.state.pauseStatus === 1
                this.setState({
                  pauseStatus: isPause ? 0 : 1,
                })

                // 暂停
                if (isPause) {
                  oldTickCb = tickCb
                  tickCb = null
                  pauseStartDate = Date.now()
                } else {
                  // 恢复
                  tickCb = oldTickCb
                  // 结束时间更新
                  this.setState({
                    endTime: this.state.endTime + (Date.now() - pauseStartDate),
                  })
                }
              }}
            >
              {this.state.pauseStatus === 1 ? "暂停" : "恢复"}
            </button>
            <button
              onClick={() => {
                this.reset()
              }}
            >
              重置
            </button>
          </div>
          <TimeSetter
            info={this.state.timeSetterInfo}
            onChange={this.timeSetterChangeHandler}
          />
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
