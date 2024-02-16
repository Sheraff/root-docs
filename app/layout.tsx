import { RootProvider } from 'fumadocs-ui/provider'
import 'fumadocs-ui/style.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { pageTree } from './source'
import { DocsLayout } from 'fumadocs-ui/layout'
import { AlgoliaSearch } from "@/components/AlgoliaSearch"
import { StaticContextProvider } from "@/components/StaticContext"
import type { Metadata } from 'next/types'

const inter = Inter({
  subsets: ['latin'],
})

const staticParams = {
  basePath: process.env.CI ? "/root-docs" : "",
  algoliaAppId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  algoliaSearchApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
}

export const metadata: Metadata = {
  title: {
    template: '%s | 🌳 Root Docs',
    default: '🌳 Root Docs',
  },
  description: 'The offline-first fullstack PWA template.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StaticContextProvider value={staticParams}>
          <RootProvider search={{ SearchDialog: AlgoliaSearch }}>
            <DocsLayout tree={pageTree} nav={{ title: '🌳 Root Docs', githubUrl: "https://github.com/Sheraff/root", enabled: true }} >
              {children}
            </DocsLayout>
          </RootProvider>
        </StaticContextProvider>
      </body>
    </html>
  )
}

