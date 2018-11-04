import styled from "react-emotion";

export default styled("section")`
  box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.06);
  background-color: white;
  border-radius: 4px;
  transition: all 0.15s ease;
  &:hover {
    transform: ${props => props.noHover || "translateY(-2px)"};
  }
`;
