import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: "#0080fc",
    primaryShade: "#0F18A6",
    primaryLight: "#B2D9FE",
    grey:"#F8F8FB",
  },
  fonts: {
    heading: 'Nunito Sans, sans-serif',
    body: 'Nunito Sans, sans-serif',
  },
})

export default theme