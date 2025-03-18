import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const EyeOpenIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" color={"currentColor"} {...props}>
    <Path
      fillRule="evenodd"
      d="m0 8 3.08-3.695a6.405 6.405 0 0 1 9.84 0L16 8l-3.08 3.695a6.405 6.405 0 0 1-9.84 0L0 8Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default EyeOpenIcon;
