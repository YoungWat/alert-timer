import React, { Fragment } from "react"

import "./index.scss"

const TimeSetter = ({
  maxHour = 24,
  maxMinute = 60,
  maxSecond = 60,
  children,
}) => {
  const selectMap = [
    {
      key: "h",
      max: maxHour + 1,
      text: "时",
    },
    {
      key: "m",
      max: maxMinute + 1,
      text: "分",
    },
    {
      key: "s",
      max: maxSecond + 1,
      text: "秒",
    },
  ]
  return (
    <section className="time-setter">
      {selectMap.map((item, index) => {
        return (
          <Fragment key={item.key}>
            <select>
              {new Array(item.max).fill("").map((n, idx) => {
                return (
                  <option key={idx} value={idx}>
                    {idx}
                  </option>
                )
              })}
            </select>
            <b className="text">{item.text}</b>
          </Fragment>
        )
      })}
      {children}
    </section>
  )
}

export default TimeSetter
