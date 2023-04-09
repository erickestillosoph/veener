import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function VHome(props: Props) {
  return (

  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" >
    <Path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
  
  )
}

export default VHome