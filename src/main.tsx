import React from 'react'
import ReactDOM from 'react-dom/client'

import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'

import store from './app/lib/store' 

import App from './App.tsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> 
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <App />
      </ErrorBoundary>  
    </Provider>
  </React.StrictMode>,
)
