import { css } from "@emotion/react";
import normalize from "emotion-normalize";

// import typography from '@wb/shared/theme/typography';
// import fontFaces from '@wb/shared/theme/typography/font-faces';
// import customProperties from '@wb/shared/theme/custom-properties';

export default css`
  ${normalize};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    /**
         * Font size 10px on default browser settings.
         * It's used as 62.5% to adapt to changes in the browser's default font-size.
         */
    /* font-size: 62.5%; */
    background-color: var(--palette-white);
  }

  body {
    overflow-x: hidden;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body,
  #root {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
  }

  #root {
    min-height: 100%;
    background-color: var(--palette-white);
  }

  main {
    flex-grow: 1;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  p,
  dl,
  dd {
    margin: 0;
  }

  /**
     * Default text
     */

  /**
     * Override Firefox's stylesheet for red box shadow on invalid fields
     * @see view-source:resource://gre-resources/forms.css
     */

  :not(output):-moz-ui-invalid {
    box-shadow: none;
  }

  :not(output):-moz-ui-invalid:-moz-focusring {
    box-shadow: none;
  }

  /**
     * Default link
     */

  a {
    cursor: pointer;
    text-decoration: none;
  }

  img {
    /* stylelint-disable-next-line */
    image-rendering: -webkit-optimize-contrast;
  }

  /**
     * Accessibility improvements
     */

  [role="tooltip"] {
    display: none;
  }
`;
