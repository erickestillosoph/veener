import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function VX(props: Props) {
  return (
  <Svg width={props.size} height={props.size} viewBox="0 0 20 20" fill="none" >
    <Path d="M5 15L15 5M5 5L15 15" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
  )
}

export default VX