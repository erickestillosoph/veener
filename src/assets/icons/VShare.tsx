import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function VShare(props: Props) {
  return (
 
  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" >
    <Path d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
  
  )
}

export default VShare