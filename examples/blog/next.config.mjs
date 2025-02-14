import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  unstable_staticImage: true
})

export default withNextra({
  reactStrictMode: true
})
