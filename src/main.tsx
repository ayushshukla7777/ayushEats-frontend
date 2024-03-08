import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import AuthenticationProvider from '@/auth/AuthenticationProvider'
import './global.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

import AppRoutes from './AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ErrorBoundary onError={fallback} fallbackRender={FallbackRender}> */}
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <Toaster visibleToasts={1} duration={1000} richColors position='top-right' />
          <AppRoutes />
        </AuthenticationProvider>
      </QueryClientProvider>
    </Router>
    {/* </ErrorBoundary> */}
  </React.StrictMode >,
)




// import { ErrorBoundary } from "react-error-boundary";

// const fallback = (error: Error) => {
//   location.href = `https://stackoverflow.com/search?q=[js]+${error.message}`;
// }

// // eslint-disable-next-line react-refresh/only-export-components
// const FallbackRender = (props: { error: Error }) => {
//   return (
//     <div>
//       <h1>Something went wrong!</h1>
//       <p>{props.error.message}</p>
//     </div>
//   );
// }