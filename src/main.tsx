import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StateContextProvider } from './context/StateContext'
import Layout from './components/Layout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Layout>
  </React.StrictMode>,
)
