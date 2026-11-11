import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from 'styled-components'
import '@fontsource/allura/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import App from './App.tsx'
import { GlobalStyle } from './components/styles.ts'
import { muiTheme, styledTheme } from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={styledTheme}>
        <CssBaseline />
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  </StrictMode>,
)
