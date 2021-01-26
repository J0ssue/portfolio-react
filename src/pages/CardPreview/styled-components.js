import styled from "@emotion/styled";

export const CardPreviewContaner = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: hsl(185, 75%, 39%);
  position: relative;
  overflow: hidden;
`;

export const CardPreviewPatternTop = styled.img`
  position: fixed;
  top: -50%;
  left: -100px;
`;

export const CardPreviewPatternBottom = styled.img`
  position: fixed;
  bottom: -50%;
  right: -100px;
`;
