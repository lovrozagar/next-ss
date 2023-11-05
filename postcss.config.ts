import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'

type PostCSSConfig = {
  plugins: postcss.AcceptedPlugin[]
}

const config: PostCSSConfig = {
  plugins: [tailwindcss, autoprefixer],
}

export default config
