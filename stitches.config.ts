import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: 'red',
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    xs: '(min-width: 576px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)',
  },
  utils: {
    marginHorizontal: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginVertical: (value: any) => ({ marginTop: value, marginBottom: value }),
    paddingHorizontal: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    padddingVertical: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})
