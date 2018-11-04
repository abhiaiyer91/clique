import styled from "react-emotion";

export default styled("input")`
  text-indent: 10px;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.06);
  border: 0px solid rgba(0, 0, 0, 0.12);
  height: 45px;
  &:focus {
    outline: none;
  }
  font-size: 14px;
  width: 100%;
  transition: all 0.15s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;
