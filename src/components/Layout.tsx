import React, { FC } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";

import wordBird from "../img/word-bird.png";

const LayoutContainer = styled(Div100vh)`
  padding: 1rem;
  display: flex;
`;

export const Layout: FC = ({ children }) => (
  <LayoutContainer>
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #4e276b;
          background-image: url(${wordBird});
          background-position: center;
          background-size: 7rem;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
    {children}
  </LayoutContainer>
);
