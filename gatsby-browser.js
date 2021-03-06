import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import { Table } from "./src/components";
import { MDXProvider } from "@mdx-js/react";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    }
`
const components = {
  table: Table
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
  </MDXProvider>
)
