import colors, { Colors } from './colors'
import fontSizes, { FontSizes } from './fonts'

export interface Theme {
  colors: Colors
  fontSizes: FontSizes
}

const themes = {
  colors,
  fontSizes
}

export default themes
