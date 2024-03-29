import createMDX from "fumadocs-mdx/config"
import { remarkImage } from 'fumadocs-core/mdx-plugins'

const withMDX = createMDX({
	mdxOptions: {
		remarkPlugins: [remarkImage]
	}
})

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
