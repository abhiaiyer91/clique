import styled from "react-emotion";

export default styled("section")`
  max-width: ${props => props.maxWidth || 480}px;
  margin: ${props => props.margin || "0 auto"};
  width: 100%;
`;
