import { ThemeProvider } from "@emotion/react";
import HomePage from "./pages/Home";
import UserPage from "./pages/User";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}

export default App;
