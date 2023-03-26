import React from 'react'
import GreenBox from '../GreenBox/GreenBox'
import RedBox from '../RedBox/RedBox'
import '../../components/color_boxes_global.css'

export default function BoxesContainer() {
  return (
    <div>
        <GreenBox />
        <RedBox />
    </div>
  )
}
