import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import GlobalStyle from "./theme/global";
import theme from "./theme/theme";
import MyThemeProvider from "./components/ThemeContext/ThemeContext";
import NotesContainer from "./components/NotesContainer/NotesContainer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <MyThemeProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <NotesContainer />
        </ThemeProvider>
      </MyThemeProvider>
    </div>
  );
}

export default App;
