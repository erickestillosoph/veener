import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function VLockClosed(props: Props) {
  return (
  <Svg width={props.size} height={props.size} viewBox="0 0 20 20" fill="none" >
    <Path d="M10 12.5V14.1667M5.00001 17.5H15C15.9205 17.5 16.6667 16.7538 16.6667 15.8333V10.8333C16.6667 9.91286 15.9205 9.16667 15 9.16667H5.00001C4.07954 9.16667 3.33334 9.91286 3.33334 10.8333V15.8333C3.33334 16.7538 4.07954 17.5 5.00001 17.5ZM13.3333 9.16667V5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15906 2.5 6.66668 3.99238 6.66668 5.83333V9.16667H13.3333Z" stroke={props.color} strokeWidth="2" strokeLinecap="round"/>
  </Svg>
  
  )
}

export default VLockClosed