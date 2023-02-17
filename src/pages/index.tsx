import Nav from "@/components/Nav";
import React from "react";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import "../globalStyles.css";

const theme = {
  main: "#454545",
};
const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>
    </>
  );
};

export default App;
