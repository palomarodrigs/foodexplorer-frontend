import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import { Routes } from './routes'
import { Home } from './pages/Home'
import { DishPreview } from './pages/DishPreview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DishPreview />
    </ThemeProvider>
  </React.StrictMode>
)
