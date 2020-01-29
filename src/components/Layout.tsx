import React, { FC } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Flex } from "rebass";

import wordBird from "../img/word-bird.png";

const LayoutContainer = styled(Flex)`
  height: 100vh;
  background-color: #4e276b;
  background-image: url(${wordBird});
  background-position: center;
  background-size: 7rem;
  padding: 1rem;
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
