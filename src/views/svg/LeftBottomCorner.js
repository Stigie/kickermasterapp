import React from "react";
import { Svg, Path, G } from "react-native-svg";

const LeftBottomCorner = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="280"
    height="280"
    viewBox="0 0 280 280"
  >
    <G fill="none" fillRule="evenodd">
      <Path fill="#FF234A" d="M176 280H0V46l176 234z" opacity=".2" />
      <Path fill="#FF234A" d="M234 280H0V104z" opacity=".2" />
    </G>
  </Svg>
);

export default LeftBottomCorner;
