import createMDX from "fumadocs-mdx/config"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	output: "export",
	basePath: process.env.CI ? "/root-docs" : undefined,
}

export default withMDX(config)
