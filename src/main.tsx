import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes"
import { QueryClientProvider } from "react-query";
import { getClient } from "./query/queryClient.ts";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
    const queryClient = getClient();
    return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={routers} />
          <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
