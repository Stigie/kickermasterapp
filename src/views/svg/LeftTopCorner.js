import React from "react";
import { Svg, Path, G } from "react-native-svg";

const LeftTopCorner = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="280"
    height="280"
    viewBox="0 0 280 280"
  >
    <G fill="none" fillRule="evenodd">
      <Path fill="#FF234A" d="M176 0H0v234L176 0z" opacity=".2" />
      <Path fill="#FF234A" d="M234 0H0v176z" opacity=".2" />
    </G>
  </Svg>
);

export default LeftTopCorner;
