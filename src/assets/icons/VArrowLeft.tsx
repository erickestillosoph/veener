import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function VArrowLeft(props: Props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 25 24" fill="none">
    <Path d="M10.5 19L3.5 12M3.5 12L10.5 5M3.5 12L21.5 12" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
    
  )
}

export default VArrowLeft