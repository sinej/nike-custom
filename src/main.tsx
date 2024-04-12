import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes"
import { QueryClientProvider } from "@tanstack/react-query";
import { getClient } from "./queryClient.ts";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
    const queryClient = getClient();
    return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={routers} />
          <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
