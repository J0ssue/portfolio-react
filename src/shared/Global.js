import { Global, css } from "@emotion/react";

// import { color, typography } from "./styles";

export const bodyStyles = css`
  *,
  body,
  html {
    margin: 0px;
    box-sizing: border-box;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={{ ...bodyStyles }} />;
};
