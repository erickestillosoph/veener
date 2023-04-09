import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function VUser(props: Props) {
  return (
  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" >
    <Path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
  
  )
}

export default VUser