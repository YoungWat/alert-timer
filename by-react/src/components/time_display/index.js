import React from "react"
import utils from "../../common/utils"

import "./index.scss"

const TimeDisplay = ({ date = 0 }) => {
  const info = utils.parseDate(date)
  console.log("info ",info)
  return (
    <span className="time-display">{`${info.flag}${info.h}:${info.m}:${info.s}`}</span>
  )
}

export default TimeDisplay
