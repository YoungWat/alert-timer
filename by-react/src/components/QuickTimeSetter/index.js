import React from "react"

import utils from "../../common/utils"

import "./index.scss"

const QuickTimeSetter = (props) => {
  const { lists = [], onSetTime } = props

  return (
    <div className="quick-time-setter">
      {lists.map((item) => {
        return (
          <button
            key={JSON.stringify(item)}
            onClick={() => {
              onSetTime && onSetTime(utils.formateInfo(item))
            }}
          >
            +&nbsp;{utils.transInfo2Str(item)}
          </button>
        )
      })}
    </div>
  )
}

export default QuickTimeSetter
