import styled from "react-emotion";

export const Flex = styled("div")`
  display: flex;
`;

export const FlexColumn = styled("div")`
  flex-direction: column;
  display: flex;
  justify-content: ${props => props.justify || "flex-start"};
  height: ${props => props.height || "auto"};
`;

export const FlexAuto = styled("div")`
  flex: 0 0 auto;
  align-self: ${props => props.align || "flex-start"};
`;

export const FlexItem = styled("div")`
  flex: 1 0 0px;
  align-self: ${props => props.align || "flex-start"};
`;
