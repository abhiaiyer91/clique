import styled from "react-emotion";

const colorMap = {
  primary: "#5978f3",
  secondary: "rgba(0, 0, 0, 0.05)"
};

const hoverMap = {
  primary: "#6f8bfb",
  secondary: "rgba(0, 0, 0, 0.12)"
};

const borderMap = {
  primary: "none",
  secondary: "1px solid rgba(0, 0, 0, 0.12)"
};

const textColorMap = {
  primary: "white",
  secondary: "black"
};

const fontWeightMap = {
  primary: "700",
  secondary: "400"
};

export default styled("button")`
  background-color: ${props => colorMap[props.color || "primary"]};
  height 40px;
  border-radius: .25rem;
  font-weight: ${props => fontWeightMap[props.color || "primary"]};
  color: ${props => textColorMap[props.color || "primary"]};
  cursor: pointer;
  border: ${props => borderMap[props.color || "primary"]};
  padding: 11px 16px;
  font-size: 16px;
  line-height: 16px;
  &: hover {
    background-color: ${props => hoverMap[props.color || "primary"]};
  }

  &: focus {
    outline: none;
  }
`;
