import React from "react"
import utils from "../../common/utils"

import "./index.scss"

const TimeDisplay = ({ date = null }) => {
  if (typeof date !== "number" && !(date instanceof Date)) {
    return "--"
  }
  const info = utils.parseDate(date, true)

  return (
    <span className="time-display">{`${info.flag}${info.h}:${info.m}:${info.s}`}</span>
  )
}

export default TimeDisplay
