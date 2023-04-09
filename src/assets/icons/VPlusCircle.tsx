import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function VPlusCircle(props: Props) {
  return (
  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" >
    <Path d="M12 9V12M12 12V15M12 12H15M12 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>

  )
}

export default VPlusCircle