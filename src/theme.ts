import { createTheme } from '@mui/material/styles'
import type { DefaultTheme } from 'styled-components'

export const palette = {
  olive: '#676A49',
  navy: '#1B263B',
  oliveMuted: '#8a8c70',
  cream: '#E0E1DD',
  creamDeep: '#cdcfc9',
  accent: '#C8963E',
  ink: '#0D1B2A',
  muted: '#2F3E46',
  paper: '#f1f2ef',
} as const

export const styledTheme: DefaultTheme = {
  colors: palette,
  fonts: {
    display: '"Manrope", cursive',
    serif: '"Manrope", serif',
    sans: '"Manrope", sans-serif',
  },
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: palette.olive,
      dark: palette.navy,
      contrastText: palette.paper,
    },
    secondary: {
      main: palette.accent,
      contrastText: palette.paper,
    },
    background: {
      default: palette.cream,
      paper: palette.paper,
    },
    text: {
      primary: palette.ink,
      secondary: palette.muted,
    },
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontFamily: '"Manrope", serif',
      fontWeight: 500,
    },
    h2: {
      fontFamily: '"Manrope", serif',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.04em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingInline: 28,
          paddingBlock: 10,
        },
        outlined: {
          borderColor: palette.olive,
          color: palette.olive,
          '&:hover': {
            borderColor: palette.navy,
            backgroundColor: 'rgba(104, 106, 71, 0.08)',
          },
        },
      },
    },
  },
})
