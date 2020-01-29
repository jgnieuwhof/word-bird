import React, { FC } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Flex } from "rebass";

const LayoutContainer = styled(Flex)`
  height: 100vh;
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
      `}
    />
    {children}
  </LayoutContainer>
);
