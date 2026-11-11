import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      olive: string
      oliveDark: string
      oliveMuted: string
      cream: string
      creamDeep: string
      terracotta: string
      ink: string
      muted: string
      paper: string
    }
    fonts: {
      display: string
      serif: string
      sans: string
    }
  }
}
