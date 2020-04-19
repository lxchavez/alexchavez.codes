import Typography from "typography"
import irvingTheme from "typography-theme-irving"

// Customize the theme
irvingTheme.bodyFontFamily = ['Lato', 'sans-serif'];

const typography = new Typography(irvingTheme)

export const { scale, rhythm, options } = typography
export default typography