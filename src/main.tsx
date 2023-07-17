import React from 'react'
import ReactDOM from 'react-dom/client'

import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'

import { store } from './app/lib/store/store' 

import App from './App.tsx'
import { Fallback } from './app/components/base/ErrorFallback/ErrorFallback.tsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> 
      <ErrorBoundary FallbackComponent={Fallback}>
        <App />
      </ErrorBoundary>  
    </Provider>
  </React.StrictMode>,
)
