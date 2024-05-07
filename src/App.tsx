import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/Home";
import UserPage from "./pages/User";
import theme from "./theme";

const queryClient = new QueryClient();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App;
