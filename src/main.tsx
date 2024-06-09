import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClientProvider } from '@tanstack/react-query'

import { ModalProvider } from '@/components/ui/modal-provider'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { queryClient } from '@/config/react-query/react-query'

import { App } from './app'
import './config/i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
