import createMDX from 'fumadocs-mdx/config'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/root-docs"
}

export default withMDX(config)
