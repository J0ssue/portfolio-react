import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavigationLink = styled(Link)`
  padding: 15px 40px;
  color: black;
  text-transform: capitalize;
  transition: 0.2s background-color cubic-bezier(0.755, 0.05, 0.855, 0.06);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
