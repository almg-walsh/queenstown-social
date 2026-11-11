import { createTheme } from '@mui/material/styles'
import type { DefaultTheme } from 'styled-components'

export const palette = {
  olive: '#686a47',
  oliveDark: '#3f412c',
  oliveMuted: '#8a8c70',
  cream: '#f3efe4',
  creamDeep: '#e6decc',
  terracotta: '#c46a4a',
  ink: '#2c2d22',
  muted: '#6b6d58',
  paper: '#faf7f0',
} as const

export const styledTheme: DefaultTheme = {
  colors: palette,
  fonts: {
    display: '"Allura", cursive',
    serif: '"Cormorant Garamond", serif',
    sans: '"Outfit", sans-serif',
  },
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: palette.olive,
      dark: palette.oliveDark,
      contrastText: palette.paper,
    },
    secondary: {
      main: palette.terracotta,
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
    fontFamily: '"Outfit", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
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
            borderColor: palette.oliveDark,
            backgroundColor: 'rgba(104, 106, 71, 0.08)',
          },
        },
      },
    },
  },
})
