import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserPage from "./pages/User";
import theme from "./theme";

const queryClient = new QueryClient();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='user' element={<UserPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </ThemeProvider >
  )
}

export default App;
